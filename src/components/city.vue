<template>
    <div class="content">
        <div v-for="item in city" :key="item">
            <div class="city-title-img"><img :src="item.img"/></div>
        <h2>{{item.name}} <h4>（中华人民共和国省级行政区）</h4></h2>
        <p id='city'>{{item.p}}</p>
        </div>       
    </div>
</template>

<script>
import imgTaiwan from '../assets/taiwan.jpg'
import imgBeijing from '../assets/beijing.jpg'
import axios from 'axios'
export default {
    data () {
        return {
            city :[
                {    id:1,
                     name:'台湾',
                     img:imgTaiwan,
                     p:'台湾（Taiwan），简称“台”，是中华人民共和国省级行政区 [1]  ，省会台北，位于中国大陆东南海域 [1]  ，东临太平洋，西隔台湾海峡与福建省相望，南界巴士海峡与菲律宾群岛相对。 [2]  台湾省由中国第一大岛台湾岛和周围属岛以及澎湖列岛两大岛群，共80余个岛屿所组成，总面积3.6万平方公里。 [2-3]  台湾省人口约2350万，超过70%集中在台湾岛西部的5大都会区，其中以台北市为中心的台北都会区最大。'
                },
                {
                    id:2,
                    name:'北京',
                    img:imgBeijing,
                    p:'北京市，简称“京”，是中华人民共和国首都、也是中国4个直辖市之一；北京是国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。北京位于华北地区，中心位置东经116°20′、北纬39°56′，东与天津毗连，其余均与河北相邻，北京市总面积16410.54平方千米 [1-2]  。截至2019年9月，北京市下辖16个市辖区。 [3]北京地势西北高、东南低。西部、北部和东北部三面环山，东南部是一片缓缓向渤海倾斜的平原。境内流经的主要河流有：永定河、潮白河、北运河、拒马河等，多由西北部山地发源，穿过崇山峻岭，向东南蜿蜒流经平原地区，最后分别汇入渤海。北京的气候为典型的暖温带半湿润大陆性季风气候，夏季高温多雨，冬季寒冷干燥，春、秋短促。 [4-5]北京被世界权威机构GaWC评为世界一线城市 [6]  。截至2018年末，北京市常住人口2154.2万人，实现地区生产总值（GDP）30320亿元，人均地区生产总值实现14万元 [7-8]  。社会消费品零售总额11747.7亿元，批发业销售额57383.1亿元，人均可支配收入62361元，住户存款总额32507.8亿元，高新技术企业总数24691家 [9-10]  。联合国报告指出北京人类发展指数居中国城市第二位。 [11]'
                }
            ]
        }
    },
    mounted(){
        let div=document.getElementById("city");
        let content=div.innerHTML;
        div.innerHTML=content.replace(/。/g,"。<br>");

    }
    
}
</script>
    
<style>
.city-title-img{
    margin: 0 auto;
}
p{
    text-indent:2em;
}
img{
    width: 100%;
    height: 400px;
}
</style>