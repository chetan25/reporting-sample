import { ResponsiveContainer, ReferenceLine, LineChart, Line, XAxis, YAxis } from 'recharts';

interface IProps {
    data: {
        name: string;
        value: number;
    }[];
}

const CustomLineChart = (props: IProps) => {
    const { data } = props;

    return (
        <ResponsiveContainer width="90%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="name"/>
                <ReferenceLine y="37" stroke="orange" label="Avg 37 Blocks" strokeDasharray="3 3" />
                <YAxis type="number" domain={[0, 'dataMax']} interval='preserveEnd'/>
                <Line type="monotone" dataKey="value" stroke="#FF8C00"  dot={false}/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CustomLineChart;