import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import {Link, LLink} from 'react-router-dom';
//Styles
import {Image} from './Thumb.styles';

const Thumb = ({image, movieId, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie thumb' />
            </Link>
        ) : (
            <Image src={image} alt='movie thumb' />
        )}
    </div>
);

export default Thumb;