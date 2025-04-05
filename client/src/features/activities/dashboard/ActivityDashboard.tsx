import { Grid2 } from '@mui/material'
import ActivityList from './activityList'
import ActivityDetail from '../details/ActivityDetail'
import ActivityForm from '../form/ActivityForm'

type Props = {
  activities: Activity[]
  selectActivity: (id: string) => void;
  cancelselectActivity: () => void;
  selectedActivity?: Activity;
  openForm: (id: string) => void;
  closeForm: () => void;
  editMode: boolean
}

export default function ActivityDashboard({ activities, cancelselectActivity,
  selectActivity,
  selectedActivity,
  openForm,
  closeForm,
  editMode
}: Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
          
        />
      </Grid2>
      <Grid2 size={5}>
        {selectedActivity && !editMode &&
          <ActivityDetail
            selectedActivity={selectedActivity}
            cancelSelectActivity={cancelselectActivity}
            openForm={openForm}
          />
        }
        {editMode &&
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
            
          />}
      </Grid2>
    </Grid2>
  )
}
