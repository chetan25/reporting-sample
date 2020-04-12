import 'Assets/details.less';
import { IAttacks, IDetails } from 'State/store';

interface IProp {
    details: IDetails
}

const renderAttack = (attacks: IAttacks[]) => {
    return attacks.map((attack, index) => {
        return <span key={attack.type}>
            <a className='m-r-0-5'>{attack.type}({attack.count})</a>
            {
                index < attacks.length -1 ? <label>| </label> : null
            }
        </span>
    });
};

export const Details = (props: IProp) => {
    const { details: {question, attacks, description} } = props;

    return (
        <div className='details-container'>
            <label>Threat Details</label>
            <div className='m-t-1'>
                <h3 data-test-id='threat-title'>{question}</h3>
                <p>{description}</p>
            </div>
            <h3 className='inline'>Attacks Seen</h3>(by # of request)
            <div>{ renderAttack(attacks) }</div>
        </div>
    )
};

export default Details;
