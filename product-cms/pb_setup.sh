PB_VERSION=0.11.0

# download and unzip PocketBase
curl -o /tmp/pb.zip "https://github.com/pocketbase/pocketbase/releases/download/v"$PB_VERSION"/pocketbase_"$PB_VERSION"_linux_amd64.zip" -L
unzip -o /tmp/pb.zip -d pb/

# restore database
unzip -o pb_data.zip -d pb/

# start
echo Starting pocketbase server ...
pb/pocketbase serve --http=127.0.0.1:7000