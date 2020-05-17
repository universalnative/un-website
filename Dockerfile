FROM node

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn

COPY --chown=node:node .env.example ./.env

# This step may seem redudant since we are already defining a volume in our Compose file.
# See this for explanation:
# https://docs.docker.com/compose/faq/#should-i-include-my-code-with-copyadd-or-a-volume
COPY --chown=node:node . .

EXPOSE 3000