import React from "react";
import PropTypes from "prop-types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
// import { makeStyles } from "@mui/styles";
import Text from "../../Atoms/TextField";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from "../../Atoms/Typography";

/* const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.containerSecondary.dark
        : theme.palette.containerSecondary.light,
    borderRadius: theme.container.secondary.borderRadius,
    padding: theme.container.secondary.padding,
  },
})); */
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const EventListItemComponent = (props) => {
  const { eventData, texti, vals } = props;
  // const style = useStyle();

  return (
    <Item><Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="140"
        image={require(`../../../assets/${eventData.pic}`)}
        alt="green iguana"
      />
      <CardHeader
        title={`Titel : 12`}
        subheader={`Unterüberschrift : 12`}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {eventData.text}
        </Typography>
        <Text size="h6" vals={vals} value={"asdasdas"} texti={texti} color={"darkGrey"} bold>

        </Text>
      </CardContent>
      <CardActions>
        <Button size="small">Teilen</Button>
        <Button size="small">Mehr erfahren</Button>
      </CardActions>
    </Card></Item>
  );
};
// class={"black-opacity"}


EventListItemComponent.propTypes = {
  eventData: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

EventListItemComponent.defaultProps = {};

export default EventListItemComponent;