import { Box, Stack } from "@mui/material";
import { ChannelCard, VideoCard } from "../";

const Videos = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return <div>No videos found.</div>;
  }

  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    >
      {videos.map((item, index) => {
        // key uchun videoId yoki channelId yo'q bo'lsa index ni qo'llaymiz
        const key = item.id.videoId || item.id.channelId || index;

        return (
          <Box key={key}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard video={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
