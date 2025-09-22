import { Box, Stack } from "@mui/material";
import { ChannelCard, VideoCard, Loader } from "../";

const Videos = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return <Loader />;
  }

  return (
    <Stack
      width={"100%"}
      gap={2}
      display="grid"
      gridTemplateColumns={{
        xs: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
    >
      {videos.map((item, index) => {
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
