FROM debian

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  curl \
  python3 \
  neofetch \
  git \
  neofetch \
  webp && \
  apt-get upgrade -y 

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - &&\
apt-get install -y nodejs
COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
