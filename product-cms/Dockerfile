FROM alpine:latest

ARG PB_VERSION=0.11.0

RUN apk add --no-cache \
    unzip \
    # this is needed only if you want to use scp to copy later your pb_data locally
    openssh

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
ADD pb_data.zip /tmp/pb_data.zip

RUN unzip /tmp/pb.zip -d /pb/
RUN unzip /tmp/pb_data.zip -d /pb/

EXPOSE 7000

# start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:7000"]