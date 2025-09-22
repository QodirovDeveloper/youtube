import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box, Chip, Typography } from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";
import ReactPlayer from "react-player";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  if (!videoDetail) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = videoDetail;
  const { title, channelId, channelTitle, description, tags } = snippet || {};
  const { viewCount, likeCount, commentCount } = statistics || {};

  return (
    <Box minHeight={"90vh"} mb={10} px={{ xs: 2, sm: 3, md: 5 }}>
      <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={2}>
        <Box width={{ xs: "100%", md: "75%" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width="100%"
            height="60vh"
            controls
          />

          <Typography
            variant="h6"
            fontWeight="bold"
            mt={2}
            sx={{ fontSize: { xs: "16px", sm: "20px" } }}
          >
            {title}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: ".7", mt: 1 }}>
            {description}
          </Typography>

          <Box display="flex" flexWrap="wrap" mt={2}>
            {tags?.map((item, idx) => (
              <Chip
                label={item}
                key={idx}
                sx={{ mt: "8px", cursor: "pointer", mr: "8px" }}
                deleteIcon={<TagIcon />}
                onDelete={() => {}}
                variant="outlined"
              />
            ))}
          </Box>

          <Typography variant="body2" mt={2}>
            👁 {parseInt(viewCount).toLocaleString()} views • 👍{" "}
            {parseInt(likeCount).toLocaleString()} likes • 💬{" "}
            {parseInt(commentCount).toLocaleString()} comments
          </Typography>
        </Box>

        <Box width={{ xs: "100%", md: "25%" }}>Suggested video</Box>
      </Box>
    </Box>
  );
};
export default VideoDetail;
