# building extensions
FROM node:22-alpine AS builder-ext

# since we are using a volume for extensions, we need to do a copy into the volume
# see ./update-extensions.sh
#WORKDIR /build
#COPY libs ./libs
#RUN cd libs/directus-extension-bellmedia-shortlink && npm install && npm run build
#RUN mkdir -p extensions/directus-extension-bellmedia-shortlink
#RUN cp libs/directus-extension-bellmedia-shortlink/package.json extensions/directus-extension-bellmedia-shortlink/
#RUN cp -r libs/directus-extension-bellmedia-shortlink/dist extensions/directus-extension-bellmedia-shortlink/

# version tables
# directus NODE_VERSION pnpm    corepack
# 11.14.1  22.21.1      10.28.0 0.34.5
# 11.13.3  22.21.1      10.23.0 0.34.4
# 11.12.0  22.19.0      10.17.1 0.34.0
# 11.9.3   22.17.0
# 11.8.0   22.16.0      10.11.1 0.33.0
FROM directus/directus:11.14.1

USER root

RUN npm install -g corepack@0.34.5

RUN corepack enable \
  && corepack prepare pnpm@10.28.0 --activate \
  # Currently required, we'll probably address this in the base image in future release
  && chown node:node /directus

USER node
RUN pnpm install https://github.com/OKAMca/directus-extension-inline-form-interface/releases/download/v1.3.1/directus-extension-inline-form-interface-1.3.1.tgz
RUN pnpm install https://github.com/OKAMca/directus-extension-thumbhash/releases/download/v0.0.5/directus-extension-thumbhash-0.0.5.tgz

RUN pnpm install directus-extension-okam@1.2.0 \
 directus-extension-sync \
 directus-extension-custom-search-okam@0.1.0 \
 directus-extension-schema-management-module \
 @directus-labs/super-header-interface@1.2.0
# TODO add docx-support

# COPY --from=builder-ext --chown=node:node /build/extensions /directus/extensions

EXPOSE 8055

# Bootstrap and start Directus
CMD ["sh", "-c", "node /directus/cli.js bootstrap && node /directus/cli.js start"]
