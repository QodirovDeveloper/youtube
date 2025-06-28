import { colors } from "../../constants/colors";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import moment from "moment/moment";

const VideoCard = ({ video }) => {
  // console.log();
  return (
    <Card sx={{ width: "320px", boxShadow: "none", borderRadius: 0 }}>
      <CardMedia
        image={
          video?.snippet?.thumbnails?.high?.url ||
          video?.snippet?.thumbnails?.medium?.url ||
          video?.snippet?.thumbnails?.default?.url
        }
        alt={video?.snippet?.title}
        sx={{ width: "360px", height: "180px" }}
      />
      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Typography my={"5px"} sx={{ opacity: ".4" }}>
          {moment(video?.snippet?.publishedAt).fromNow()}
        </Typography>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          {video?.snippet?.title.slice(0, 50)}
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: ".6" }}>
          {video?.snippet?.description.slice(0, 70)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
