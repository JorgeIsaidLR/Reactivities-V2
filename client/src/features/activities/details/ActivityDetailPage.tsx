import { Grid2, Typography } from "@mui/material"
import { useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailSidebar from "./ActivityDetailSidebar";

export default function ActivityDetailPage() {

  const { id } = useParams();
  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <Typography>Loading...</Typography>
  if (!activity) return <Typography>Activity not Found</Typography>

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={8}>
        <ActivityDetailsHeader activity={activity} />
        <ActivityDetailsInfo activity={activity}/>
        <ActivityDetailChat />
      </Grid2>
      <Grid2 size={4}>
        <ActivityDetailSidebar />
      </Grid2>
    </Grid2 >
  )
}

