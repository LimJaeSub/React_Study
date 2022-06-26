import './Card.css';

const Card = (props)=>{
    const classes = 'card ' + props.className; // 클래스명 클래스명<<< 이 구조가 중요하므로 'card ' <<띄어쓰기 해주는 것이 중요
    return(
        <div className={classes}>{props.children}</div>
    )
}
export default Card;