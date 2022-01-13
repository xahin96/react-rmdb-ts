import React from "react";
//Helpers
import {calcTime, convertMoney, convertMOney} from '../../helpers';
import MovieInfo from "../MovieInfo";
//Styles
import {Wrapper, Content} from './MovieInfoBar.styles';

const MovieInfoBar = ({time, budget, revenue}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Running time: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Running time: {calcTime(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

export default MovieInfoBar
