import { Link, Avatar, Container, ImageList, ImageListItem, makeStyles, Typography, Divider } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: "#555",
    },
    link: {
        marginRight: theme.spacing(2),
        color: "#555",
        fontSize: 16,
    },
}));

const Rightbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography className={classes.title} gutterBottom>
                Online Friends
            </Typography>
            <AvatarGroup max={6} style={{ marginBottom: 20 }}>
                <Avatar
                    alt="Remy Sharp"
                    src=""
                />
                <Avatar
                    alt="Travis Howard"
                    src=""
                />
                <Avatar
                    alt="Cindy Baker"
                    src=""
                />
                <Avatar
                    alt="Trevor Henderson"
                    src=""
                />
                <Avatar
                    alt="Trevor Henderson"
                    src=""
                />
                <Avatar
                    alt="Trevor Henderson"
                    src=""
                />
                <Avatar
                    alt="Trevor Henderson"
                    src=""
                />
                <Avatar
                    alt="Trevor Henderson"
                    src=""
                />

            </AvatarGroup>
            <Typography className={classes.title} gutterBottom>
                Gallery
            </Typography>
            <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
                <ImageListItem>
                    <img
                        src="https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/breakfast-foods.jpg?quality=82&strip=all"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Sheepherder-s-Breakfast_EXPS_GHBZ18_983_B08_15_4b-3.jpg"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnS8yngWJEUFoppXBXrGauA5ZCPKfko4uz1w&usqp=CAU"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://hips.hearstapps.com/wdy.h-cdn.co/assets/cm/15/10/54f4942704aae_-_ghk-feb-recipes-love-toast-ghk0215-xln.jpg?crop=0.769xw:1.00xh;0.0884xw,0&resize=480:*"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/breakfast-in-bed-1583517547.jpg?crop=0.670xw:1.00xh;0.212xw,0&resize=640:*"
                        alt=""
                    />
                </ImageListItem>
            </ImageList>
            <Typography className={classes.title} gutterBottom>
                Categories
            </Typography>
            <Link href="#" className={classes.link} variant="body2">
                Sport
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Food
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Music
            </Link>
            <Divider flexItem style={{ marginBottom: 5 }} />
            <Link href="#" className={classes.link} variant="body2">
                Movies
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Science
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Life
            </Link>
        </Container>
    );
};

export default Rightbar;
