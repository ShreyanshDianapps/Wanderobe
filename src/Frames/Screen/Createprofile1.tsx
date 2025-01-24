import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Platform } from 'react-native'

//assets import
import Backicon from '../../assets/Images/Backicon.svg'
import Camera from '../../assets/Images/Camera.svg'
import Profile from '../../assets/Images/Profile.svg'
//utils import
import { vh, vw, normalize } from '../../utils/dimensions'
import Fonts from '../../utils/Fonts'
import Color from '../../utils/Color'
//components import 
import TextInputComponent from '../../Components/TextInputComponent'
import ChoosingPrefence from '../../Components/ChoosingPrefence'
import DropDownComponent from '../../Components/DropDownComponent'
import HideComponent from '../../Components/HideComponent'
import Login from '../../Components/Login'


const Createprofile1 = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [si_data, setsi_data] = useState(["XS", "S", "M", "T", "T", "B", "W", "HJ", "Hj"])
    const [value, setvalue] = useState("Select your size");
    const [showhide, setShowhide] = useState(false)
    const [code, setcode] = useState("+1")
    const [data, setData] = useState(["+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8"])
    const [name1, setname] = useState("")
    const handlepress = () => {

    }

    return (
        <View style={styles.maincomp}>
            <View style={styles.upper}>
                <TouchableOpacity  >
                    <Backicon />

                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.skiptext}>Skip for now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.data_container}>
                <View style={styles.info_container}>
                    <Text style={styles.info_text1}>Create profile</Text>
                    <Text style={styles.info_text2} >Set up your profile to personalize your experience</Text>
                </View>
                <View style={styles.datainfo_container}>
                    <View style={styles.profileView}>
                        <Profile style={styles.profile}/>
                        <TouchableOpacity style={styles.camera}>
                            <Camera/>
                        </TouchableOpacity>

                    </View>
                    <TextInputComponent
                        text="Name"
                        placeholder='Enter your name'
                        value={name}
                        stylemain={{
                            marginLeft: vh(16)
                        }}
                        onChange={(name) => setName(name)}
                    />
                    <TextInputComponent
                        text="Age"
                        placeholder='Enter your age'
                        stylemain={{
                            marginLeft: vh(16)
                        }}
                        value={age}
                        onChange={(age) => setAge(age)}
                    />
                    <View >
                        <Text style={styles.choosingtext}>Select clothing preference</Text>
                        <View style={styles.choseprefrnce}>
                            <ChoosingPrefence
                                text="Men"
                                style={{}}
                                onPress={handlepress} />
                            <ChoosingPrefence
                                text="Women"
                                style={{}}
                                onPress={handlepress} />
                            <ChoosingPrefence
                                text="Neutral"
                                style={{}}
                                onPress={handlepress} />

                        </View>

                        <DropDownComponent
                        flag={false}
                            toptext="Size"
                            title="Select your size"
                            value={value}
                            data={si_data}
                            style={{}}
                            styletop={{}}
                            onPress={(item) => setvalue(item)}
                        />
                        <View style={{ marginTop: vh(8) }}>
                            <HideComponent
                                text="Hide my size from reviews"
                                value={showhide}
                                onPress={(item) => setShowhide(item)}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", gap: normalize(8) }}>
                        <DropDownComponent
                        flag={true}
                            toptext='Mobile Number'
                            title="Number"
                            style={{
                                height: vh(48),
                                width: vw(106),

                            }}
                            styletop={{
                                top: Platform.OS === 'ios' ? vh(-180) : vh(-180),
                            }}
                            value={code}
                            data={data}
                            onPress={(title) => setcode(title)}
                        />
                        <TextInputComponent
                            text=""
                            placeholder='Enter your number'
                            style={{
                                width: vw(229),
                                zIndex: -1,

                            }}
                            stylemain={{
                                paddingTop: vh(20)
                            }}
                            value={name1}
                            onChange={(name) => setname(name)}
                        />
                    </View>
                    <View>
                    </View>
                </View>
                <Login
                    text="Login"
                    
                    color={Color.Neutral_White}
                    style={{
                        
                       viewstyle:{
                        zIndex: -1,
                        backgroundColor:Color.Neutral_Black,
                        marginLeft:vw(16)
                        
                       },
                       textstyle:{
                        color:Color.Neutral_White
                       }

                    }}
                    onPress={() => {

                    }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    maincomp: {
        flex: 1,
        gap: normalize(10)
    },
    upper: {
        width: vw(343),
        flexDirection: "row",
        marginTop: Platform.OS === 'ios' ? vh(45) : vh(25),
        marginLeft: vw(16),
        gap: normalize(218),
        // justifyContent:"center"
    },
    skiptext: {
        fontFamily: Fonts.Lexend,
        fontSize: normalize(14),
        textDecorationLine: "underline",
        alignSelf: "center",
        paddingTop: vh(5)
    },
    data_container: {
        gap: normalize(28),

        // marginLeft: vw(16),
        height: vh(693),
        width: vw(343),
    },
    info_container: {
        height: vh(57),
        gap: normalize(12),
        marginLeft: vw(16),
    },
    info_text1: {
        fontFamily: Fonts.Lexend,
        fontSize: normalize(20),
        color: Color.Neutral_Black
    },
    info_text2: {
        fontFamily: Fonts.LexendLight,
        fontSize: normalize(14),
        color: Color.Neutal_sub
    },
    datainfo_container: {
        height: vh(524),
        gap: normalize(20),

    },
    profileView: {
        height: vh(64),
        width: vw(64),
        borderRadius:normalize(70),
        borderWidth:normalize(1),
        borderColor:Color.Neutral_Border,
        justifyContent:"center",
        alignSelf: "center"
    },
    profile:{
            alignSelf:"center",

    },
    camera:{
        height: vh(24),
        width: vw(24),
        borderRadius:normalize(40),
        backgroundColor:Color.Brand_Beige,
        position:"absolute",
        left:vw(45),
        top:vh(1),
        borderWidth:normalize(0.5),
        justifyContent:"center",
        alignItems:"center"
    },
    choseprefrnce: {
        flexDirection: "row",
        gap: normalize(12),
        marginLeft: vw(16),
        paddingBottom: vh(20)
    },
    choosingtext: {
        paddingBottom: vh(8),
        color: Color.Neutral_Black,
        fontFamily: Fonts.Lexend,
        fontSize: normalize(12),
        marginLeft: vw(16)


    },





})
export default Createprofile1
