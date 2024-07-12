import {Progress} from './Progress';

const divStyle = {
    padding: '10vh',
    backgroundColor: 'black',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
    outlineBottom: '2px solid grey',
    height: 'auto',
}

const line = {
    backgroundColor: 'grey',
    width: '90',
    margin: 'auto',
}
export const Desc = () => {
    return(
        <>
        <div style = {divStyle}>
            <h1>Resume</h1>
            <h4>| Web Developer | Data Science | Generative AI | </h4>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt perferendis illo accusantium voluptatum similique numquam maiores accusamus quaerat optio eos eum quidem vitae eaque atque aut, ut veniam, earum impedit?</h4>
            <hr style={line}></hr>
            <h2>Skills</h2>
            <Progress val='90' name='Python'/>
            <Progress val='70' name='C++'/>
            <Progress val='80' name='Javascript'/>
        </div>
        </>
    )
}