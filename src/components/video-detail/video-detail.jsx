import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box, Chip } from "@mui/material";
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

  const {
    snippet: { title, channelId, channelTitle, description, tags, thumbnails },
    statistics: { viewCount, likeCount, commentCount },
  } = videoDetail;

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
          <Box display="flex" flexWrap="wrap" mt={1}>
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
        </Box>
        <Box width={{ xs: "100%", md: "25%" }}>Suggested video</Box>
      </Box>
    </Box>
  );
};
export default VideoDetail;
