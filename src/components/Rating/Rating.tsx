export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingPropsType = {
  value: RatingType
  callBack: (value: RatingType) => void
}

export const Rating = (props: RatingPropsType) => {

  return (
    <div>
      <Star selected={props.value > 0} callBack={() => props.callBack(1)} />
      <Star selected={props.value > 1} callBack={() => props.callBack(2)} />
      <Star selected={props.value > 2} callBack={() => props.callBack(3)} />
      <Star selected={props.value > 3} callBack={() => props.callBack(4)} />
      <Star selected={props.value > 4} callBack={() => props.callBack(5)} />
    </div>
  );
}

type StarPropsType = {
  selected: boolean
  callBack: () => void
}

function Star(props: StarPropsType) {
  return <span onClick={props.callBack}> {props.selected ? <b>Star </b> : 'Star '} </span>
}



