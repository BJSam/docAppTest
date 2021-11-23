import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image, StatusBar, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert, TextInput } from 'react-native'
import { Neomorph, NeomorphBlur, NeomorphFlex, Shadow } from 'react-native-neomorph-shadows'
export const gh = Dimensions.get('window').height
export const gw = Dimensions.get('window').width
export const pcolor = '#51b8b7'
export const pcolor2 = '#43b7b7'
export default function home() {
  const menuItems = ['homw', 'services', 'cointsce', 'request', 'order', 'history', 'somthing']
  const [selected, setselected] = useState<number>(0)
  const [selectedOP, setselectedOP] = useState<number>(0)
  const [selectedTab, setselectedTab] = useState<number>(0)
  const ops=[
    {
      t:'Buy Medicines',
      s:require('../things/1.jpg')
    },
    {
      t:'Book Lab Test',
      s:require('../things/2.jpg')
    },
    {
      t:'Find Hospitals',
      s:require('../things/3.jpg')
    },
    {
      t:'Get Free Consult',
      s:require('../things/4.jpg')
    },
    {
      t:'Buy Medicines1',
      s:require('../things/1.jpg')
    },
    {
      t:'Book Lab Test1',
      s:require('../things/2.jpg')
    },
    {
      t:'Find Hospitals1',
      s:require('../things/3.jpg')
    },
    {
      t:'Get Free Consult1',
      s:require('../things/4.jpg')
    },
  ]
  const btns=[{
    t:'Home',
    s:require('../things/h.png')
  },
  {
    t:'Settings',
    s:require('../things/s.png')
  },
  {
    t:'Fav',
    s:require('../things/f.png')
  },
]

  const hscroll = useRef<any>()
  const onPress = (index: number) => {
    if (hscroll) {
      hscroll.current.scrollTo({ x: (gw / menuItems.length) * (index), animated: true })

    }
  }
  return (
    <ScrollView>
      <StatusBar backgroundColor={pcolor} />
      <View style={{
        width: gw,
        height: gh / 3.2
      }}>

        <View style={[
          styles.nav, {
            zIndex: 2,
          }
        ]}>

          <View style={styles.navIt1}>
            <Image
              source={require('../things/igg.jpeg')}
            />
            <Neomorph
              darkShadowColor="#000" // <- set this
              lightShadowColor='white' // <- this
              style={{
                shadowOpacity: 0.3, // <- and this or yours opacity
                shadowRadius: 2,
                borderRadius: 50,
                backgroundColor: pcolor2,
                width: 200,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              children={
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert('Location');
                  }}
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: 200,
                    height: 60,
                    paddingLeft: 25,
                    paddingRight: 25
                  }}
                >

                  <Text style={{ color: 'white', fontSize: 18 }}>
                    Hyderabad
                  </Text>
                  <View
                    style={{
                      width: 1,
                      backgroundColor: 'white',
                      height: '100%',
                      marginLeft: 15
                    }}
                  />
                  <Image style={{
                    width: 20, height: 40,
                  }} resizeMode={'contain'} source={require('../things/lc.png')} />

                </TouchableOpacity>

              }
            />
          </View>


          <View style={{ height: 50, paddingLeft: 5 }}>
            <ScrollView horizontal

              ref={hscroll}
              showsHorizontalScrollIndicator={false}
            >
              {
                menuItems.map((i: string, ii: number) => {
                  return <TouchableOpacity
                    key={i}
                    style={{
                      width: 100,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderBottomWidth: selected == ii ? 5 : 0,
                      borderColor: '#c3b382'
                    }}
                    onPress={() => {
                      onPress(ii)
                      setselected(ii)
                    }}
                  >
                    <Text key={i} style={{
                      color: 'white',
                      fontSize: 18,
                      fontWeight: selected == ii ? 'bold' : 'normal'
                    }}>
                      {i}
                    </Text>
                  </TouchableOpacity>
                })
              }
            </ScrollView>

          </View>
        </View>
        <View style={[styles.nav, {
          backgroundColor: '#ffca6b',
          zIndex: 1,
          top: -1 * gh / 3.5 + 15

        }]} />

      

      </View>
       <View style={{
         justifyContent:'center',
         alignItems:'center',
         alignSelf:'center'
       }}>
       <Neomorph
        inner
        swapShadows
              darkShadowColor={pcolor2} // <- set this
              lightShadowColor={pcolor2} // <- this
              style={{
                shadowOpacity: 0.5, // <- and this or yours opacity
                shadowRadius: 2,
                borderRadius: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                width:gw/1.2,
                height:100,
                position:'relative',
                zIndex:4,
                top:-gh/12,
              }}
              children={<View
              style={{
                justifyContent:'space-between',
                alignItems:'center',
                flexDirection:'row',
                width:'100%',
                paddingLeft:25,
                paddingRight:25
              }}
              >
                
              <Image style={{width:40,height:40
              }} source={require('../things/mg.png')}/>
              
            <TextInput style = {{backgroundColor:'white', flex:1,
            fontSize:18
          }}
               underlineColorAndroid = "transparent"
               placeholder = "Input"
               placeholderTextColor = "#b4b5b9"
               autoCapitalize = "none"
               
               />
              <Image resizeMode={'contain'} style={{width:40,height:40
              }} source={require('../things/ff.png')}/>
              </View>}
              />
       </View>
   <View style={{
      height:200,
   }}>
   <View style={{
         backgroundColor:pcolor,
         width:gw/1.2,
         height:150,
         borderRadius:20,
         alignSelf:'center',
         position:'relative'
       }}>
         
         <View style={{
           flexDirection:'row',
           width:'100%',
           justifyContent:'space-between'
         }}>
           <Image resizeMode={'contain'} style={{width:150,height:350,
          
          position:'relative',zIndex:5, top:-110}} source={require('../things/doc.png')}/>
        <View style={{
          height:150,
          borderRadius:20,
          flex:1,
          justifyContent:'center'
        }}>
          <Text style={{
            fontSize:22,
            color:'#f5ca75',
            fontWeight:'bold'
          }}>
            Consult Top Doctors
          </Text>
          <Text style={{
            color:'white',
            width:'90%',
            fontSize:16
          }}>
            Connect and speak with a doctor now
          </Text>
        </View>
         </View>
       </View>
       <View style={{
           width:150,
           height:50,
           position:'relative',
           bottom:25,
           zIndex:20,
           left:gw/2
         }}>
           <Neomorph
           darkShadowColor="#000" // <- set this
           lightShadowColor='white' // <- this
           style={{
             shadowOpacity: 0.3, // <- and this or yours opacity
             shadowRadius: 2,
             borderRadius: 50,
             backgroundColor: 'white',
             width: 150,
             height: 50,
             justifyContent: 'center',
             alignItems: 'center',
           }}
           children={<TouchableOpacity
           onPress={()=>Alert.alert('book')}
           style={{
             flex:1,
             justifyContent:'center',
             alignItems:'center',
             width:'100%'
           }}
           >
             <Text style={{
               color:'#4e8284',
               fontSize:18,
               fontWeight:'bold'
             }}>
               Book Now
             </Text>
           </TouchableOpacity>}
           />
           </View> 
   </View>
   <View style={{
     width:'100%',
     flexDirection:'row',
     flexWrap:'wrap',
     justifyContent:'space-around',
     alignItems:'center'
   }}>
   {
  ops.slice(0,4).map((d:{t:string,s:any})=>{
    return <TouchableOpacity
    key={d.t}
    style={{
      backgroundColor:pcolor2,
      width:gw/2.5,
      height:80,
      margin:10,
      borderRadius:20,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    }}
    >
      <Neomorph
      swapShadows
      darkShadowColor="#000" // <- set this
      lightShadowColor={pcolor2}
      style={{
        width:gw/2.5,
        height:80,
        shadowOpacity: 0.2, // <- and this or yours opacity
        shadowRadius: 2,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      children={
        <View style={{
          justifyContent:'center',
          alignItems:'center', 
          flexDirection:'row'
        }}>
          <Image resizeMode={'contain'} style={{width:40,height:40}} source={d.s}/>
        <Text style={{
          width:'50%',
          fontSize:18,
          fontWeight:'bold',
          color:pcolor,
          paddingLeft:15
        }}>
        {d.t}
      </Text>
        </View>
      }
      />
   
    </TouchableOpacity>
  })
}
   </View>
<View style={{
  marginTop:45
}}>
  <Text style={{
    color:'#24717d',
    fontSize:22,
    fontWeight:'bold',
    
  paddingLeft:25,
  paddingRight:25
  }}>
    Common Health Conserns
  </Text>
  <View style={{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
  }}>
  <ScrollView
  style={{
    width:'100%',
    marginTop:15
  }}
  horizontal
  showsHorizontalScrollIndicator={false}
  >
  {
    ops.map((d:{t:string,s:any},i:number)=>{
      return <TouchableOpacity key={d.t} style={{
        backgroundColor:'#fff',
        width:100,
        height:220,
        borderRadius:50,
        marginRight:20,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
      }}
      onPress={()=>{
        setselectedOP(i)
      }}
      >
      
        <Neomorph
          
      darkShadowColor={pcolor} // <- set this
      lightShadowColor={pcolor}
      style={{
        width:80,
        height:180,
        shadowOpacity: 0.5, // <- and this or yours opacity
        shadowRadius: selectedOP==i?2:0,        
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:selectedOP==i?'#e1f3f3':'#fff'
      }}
      children={
      <View style={{
        
      }}>
          <Image resizeMode={'contain'} style={{width:60,height:80}} source={d.s}/>
        <Text
        style={{
          color:'#24717d',
          fontSize:18,
          fontWeight:'bold',
          paddingTop:15
        }}
        >
          {`Title${i+1}`}
        </Text>
      </View>
      }
      />
      </TouchableOpacity>
    })
  }
  </ScrollView>
  </View>
  
</View>

<View style={{
  width:'100%',
  height:100,
  backgroundColor:'#fff',
  marginTop:15,
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'row'
  }}>
  {
    btns.map((d:{t:string,s:any},i:number)=>{
      return selectedTab==i?  <Neomorph
      key={d.t}
      darkShadowColor={pcolor} // <- set this
      lightShadowColor={pcolor} // <- this
      style={{
        shadowOpacity: 0.3, // <- and this or yours opacity
        shadowRadius: 3,
        borderRadius: 50,
        backgroundColor: 'white',
        width: 150,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:gw/5,
        marginRight:gw/5
      }}
      children={<TouchableOpacity
      onPress={()=>Alert.alert('book')}
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        flexDirection:'row'
      }}
      >
        <Image style={{width:30,height:30,}} source={d.s}/>
        <Text style={{
          color:'#4e8284',
          fontSize:18,
          fontWeight:'bold',
          paddingLeft:15
        }}>
          {d.t}
        </Text>
      </TouchableOpacity>}
      />:
      <TouchableOpacity 
      onPress={()=>{
        setselectedTab(i)
      }}
      key={d.t} style={{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
}}>
<Image source={d.s}/>
</TouchableOpacity>
    })
  }


</View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 28,
  },
  nav: {
    height: gh / 3.5,
    backgroundColor: pcolor,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'relative',
  },
  navIt1: {

    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between'
  }
});