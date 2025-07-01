import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box, Chip } from "@mui/material";
import TagIcon from "@mui/icons-material/Tag"; // to'g'ri ikon

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
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"}>
        <Box width={"75%"}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            // className="react-player" 
            controls
          />
          {tags?.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
              deleteIcon={<TagIcon />}
              onDelete={() => {}}
              variant="outlined"
            />
          ))}
        </Box>
        <Box width={"25%"}>Suggested video</Box>
      </Box>
    </Box>
  );
};
export default VideoDetail;
