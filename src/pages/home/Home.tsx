import Title from '../../components/title/Title';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import './home.css';

const itemData = [
    {
        img: 'https://www.buldog.co.il/wp-content/uploads/2020/05/1568.png',
        title: 'רועה גרמני',
    },
    {
        img: 'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg',
        title: 'Topper, a 7-year-old',
    },
    {
        img: 'https://www.isradog.co.il/wp-content/uploads/cc11.jpg',
        title: 'שר-פיי',
    },
    {
        img: 'https://www.vets4pets.com/siteassets/species/dog/chocolate-labrador-looking-anxious.jpg?width=1040',
        title: 'Anxiety is a feeling of worry',
    },
    {
        img: 'https://d.newsweek.com/en/full/1979380/dog-running-through-autumn-leaves.webp?w=466&h=311&f=d724190ecb5582e8a86d87dcc25351a1',
        title: ' viral puppy moments',
    },
    {
        img: 'https://www.isradog.co.il/wp-content/uploads/cc41.jpg',
        title: 'סיני מצוייץ',
    },
    {
        img: 'https://www.isradog.co.il/wp-content/uploads/cc51.jpg',
        title: 'טרייר טיבטי',
    },
    {
        img: 'https://www.isradog.co.il/wp-content/uploads/cc61.jpg',
        title: 'ונגקינג סיני',
    },
    {
        img: 'https://www.isradog.co.il/wp-content/uploads/cc71.jpg',
        title: 'להאסה אפסו',
    },
    {
        img: 'https://www.isradog.co.il/wp-content/uploads/cc91.jpg',
        title: 'להאסה אפסו',
    },
    {
        img: 'https://www.buldog.co.il/wp-content/uploads/2020/05/1606.png',
        title: 'רועה קווקזי',
    },
    {
        img: 'https://www.buldog.co.il/wp-content/uploads/2020/05/1585.png',
        title: 'שיצו',
    },
];

const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
);

function Home() {
    return (
        <>
            <div className="  ">
                <Title main="Animall World" sub="Special Livestock Sales" />
                <Stack direction="row" spacing={4}>
                    <Avatar
                        alt="Ofer dahan"
                        src="https://dub01pap003files.storage.live.com/y4mPJaua_jt9PaJ280grOe84sXJv8mUFVszw3NFt-_WmRFVraweKt65Wf2q2rZkeBzMrjNYTfYGe3ZVfnibKdo23PKWr92bMRmrVSg-qlMzdwRQxraKZsxW1hcXyU4qtspj3dPtZ868hiWomUiu4W5pHgOfVaQqNq6d83sLBxHYk_emD4bDuyxFnGLV9H4EJ7XparsrA4sVFu7FyL5LxSiLAo31ZMCAvfzT5icwcoz4InI?encodeFailures=1&width=1873&height=921"
                    />
                </Stack>
            </div>

            <div className="   container d-flex justify-content-around">
                <ImageList sx={{ width: 800, height: 750 }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img src={`${item.img}?w=164&h=164&fit=crop&auto=format`} srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>

            <div className="card text-center">
                <div className="card-header">דברי הסבר</div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p> 'Enter' ליצור כרטיס חדש לחץ על מקש</p>
                        <footer className="blockquote-footer">
                            מנהל <cite title="Source Title">יכול ליצור כרטיס חדש</cite>
                        </footer>
                    </blockquote>
                    <p> מכיוון שהזמן דחוק ממשיך עם תוספות עד לבדיקה </p>
                    <p> הכנסתי שם משתמש וסיסמא שתוכל ישר להיכנס </p>
                </div>
            </div>
        </>
    );
}

export default Home;
