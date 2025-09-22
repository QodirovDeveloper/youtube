import { CheckCircleOutline } from "@mui/icons-material";
import { colors } from "../../constants/colors";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link
        to={`/video/${video?.id?.videoId}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          image={
            video?.snippet?.thumbnails?.high?.url ||
            video?.snippet?.thumbnails?.medium?.url ||
            video?.snippet?.thumbnails?.default?.url
          }
          alt={video?.snippet?.title}
          sx={{
            width: { xs: "100%", sm: "360px" },
            height: { xs: "200px", sm: "180px" },
          }}
        />
      </Link>
      <CardContent
        sx={{
          background: colors.primary,
          height: { xs: "auto", sm: "200px" },
          position: "relative",
        }}
      >
        <Link
          to={`/video/${video?.id?.videoId}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            my={"5px"}
            sx={{ opacity: ".4", fontSize: { xs: "12px", sm: "14px" } }}
          >
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={"bold"}
            sx={{ fontSize: { xs: "14px", sm: "16px" } }}
          >
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ opacity: ".6", fontSize: { xs: "12px", sm: "14px" } }}
          >
            {video?.snippet?.description.slice(0, 70)}
          </Typography>
        </Link>
        <Stack
          direction={"row"}
          position={"absolute"}
          bottom={"10px"}
          alignItems={"center"}
          gap={"5px"}
        >
          <Avatar
            src={video?.snippet?.thumbnails?.high?.url}
            sx={{ width: { xs: 28, sm: 36 }, height: { xs: 28, sm: 36 } }}
          />
          <Typography
            variant={"subtitle2"}
            color={"gray"}
            sx={{ fontSize: { xs: "12px", sm: "14px" } }}
          >
            {video?.snippet?.channelTitle}
            <CheckCircleOutline
              sx={{
                fontSize: { xs: "10px", sm: "12px" },
                color: "gray",
                ml: "5px",
              }}
            />
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
