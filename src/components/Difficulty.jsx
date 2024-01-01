import React from "react";
import {Img,Name,Ul,Li,Ul0,Li0,Div,Li1} from '../css-components/Diff.styled'  
const Difficulty=(mean)=>{
    const means = {
        0:{name0:'Smoked salmon burger',images:['https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg'],time:20,cal:210,serv:6,diff:['green','red','red'],bg:'yellow'},
        1:{name0:'Spicy potato salad',images:['https://taste.co.zw/wp-content/uploads/2017/12/Spicy-Potato-Salad.jpg'],time:30,cal:320,serv:2,diff:['red','green','red'],bg:'yellow'},
        3:{name0:'Chicken Biryani',images:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQ4M4RcVey4ykM4oUaEhsfIaFFjY8oLB2Rw&usqp=CAU','https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1.jpg'],time:40,cal:700,serv:4,diff:['red','red','green'],bg:'red'},
    }
    const levels = ['Easy','Medium','Hard']
    mean = mean['mean']
    mean = means[mean]
    console.log(mean['bg']);
        return(
            <div style={{background:mean['bg']}}>
                <Ul0>
                    {mean['images'].map((item) => (
                    <Li0><Img src={item} alt="image"/></Li0>
                    ))}
                </Ul0>
                <Name>{mean['name0']}</Name>
                <Ul>
                    <Li><p>{mean['time']} min</p></Li>
                    <Li><p>{mean['serv']} servings</p></Li>
                    <Li><p>{mean['cal']} calories</p></Li>
                </Ul>
                    <Div>
                    {levels.map((level,index)=>(
                    <Li1 key={index} style={{background:mean.diff[index]}}>
                    {level}
                    </Li1>
                    ))}
                    </Div>
            </div>
        )
}
export default Difficulty