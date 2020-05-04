# specify the node base image with your desired version node:<version>
FROM node:12.13.0

# Linux Debian の docker image使ってると apt-get でエラーが出る対応
# https://qiita.com/rh_taro/items/40373a30ead444ae9ca7
RUN echo "deb http://deb.debian.org/debian jessie main" > /etc/apt/sources.list \
 && echo "deb http://security.debian.org jessie/updates main" >> /etc/apt/sources.list

# install dependency package
RUN apt-get update \
 && apt-get install -y \
    apt-transport-https \
    libssl-dev \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# install yarn
# https://yarnpkg.com/en/docs/install#linux-tab
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
 && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
 && apt-get update \
 && apt-get install -y \
    yarn \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Install app dependencies
COPY package.json /src/package.json
COPY yarn.lock /src/yarn.lock
RUN cd /src; yarn install

# Bundle app source
ADD ./src /src/src/

# Copy files
COPY .eslintrc.yml /src/.eslintrc.yml
COPY .prettierrc.yml /src/.prettierrc.yml
COPY nuxt.config.ts /src/nuxt.config.ts
COPY tsconfig.json /src/tsconfig.json

# Open 4000 port
EXPOSE 4000

# Set workdir
WORKDIR /src

RUN env

# build 実行
# TODO yarn
CMD ["/bin/sh", "-c", "yarn build && yarn start"]
