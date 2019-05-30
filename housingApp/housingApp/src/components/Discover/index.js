import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, ScrollView, Dimensions, ImageBackground, Image, Animated} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height} = Dimensions.get('screen');
const mocks = [
  {
    id: 1,
    user: {
      name: 'Ryan Buckets',
      avatar: 'https://images.unsplash.com/photo-1489779162738-f81aed9b0a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=782&q=80'
    },
    location: 'San Jose, California',
    state: 'California',
    saved: false,
    temperature: 87,
    title: 'Palms at Morada',
    description: 'Live an extravagant life at The Palms at Morada! The Palms at Morada... Come for the Location, Stay for the Lifestyle.',
    rating: 3.7,
    reviews: 321,
    preview: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    image: [
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524431144429-03fdd30eee26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=979&q=80',
      'https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    ]
  },
  {
    id: 2,
    user: {
      name: 'Mike Bruce',
      avatar: 'https://images.unsplash.com/photo-1491617636265-a676d2700d7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    location: 'Las Vegas, Nevada',
    state: 'Nevada',
    saved: true,
    temperature: 43,
    title: 'Renaissance Villas',
    description: 'Abundant amenities and minutes from Main Street shopping, dining and entertainment.',
    rating: 4.4,
    reviews: 321,
    preview: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80',
    image: [
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524431144429-03fdd30eee26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=979&q=80',
      'https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    ]
  },
  {
    id: 3,
    user: {
      name: 'Jessica Lee',
      avatar: 'https://images.unsplash.com/photo-1506956191951-7a88da4435e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
    },
    location: 'New York, New York',
    state: 'New York, New York',
    saved: false,    
    temperature: 76,
    title: 'The Jefferson',
    description: 'Far from ordinary. New luxury apartments in the heart of the charming and historic village of Farmingdale.',
    rating: 4.8,
    reviews: 321,
    preview: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    image: [
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524431144429-03fdd30eee26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=979&q=80',
      'https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    ]
  }
]
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 36,
    paddingTop: 48,
    paddingBottom: 24,
  },
  articles: {
    //paddingHorizontal: 36,  
  },
  homes: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  home: {
    width: width - (36 * 2),
    height: width * 0.6,
    marginHorizontal: 36,
    paddingHorizontal: 36,
    paddingVertical: 36 * 0.66,
    borderRadius: 12,
  },
  recommended: {
    padding: 36,
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18
  },
  description: {
    position: 'absolute',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    bottom: -35,
    left: (width - 20) / 9,
    backgroundColor: 'white',
    width: width - 136,
  },
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recommendation: {
    width: width/2.7, 
    marginHorizontal: 8,
    backgroundColor: 'white',
    //overflow: 'hidden',
    borderRadius: 12,
    marginVertical: 6,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  recommendationTopInfo: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0,
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    padding: 6,   
  }
});

class Discover extends Component {
  static navigationOptions ={
    header:(
      <View style={[styles.flex, styles.row, styles.header, {justifyContent: 'space-between', alignItems: 'center',}]}>
        <View>
          <Text>Search for home</Text>
          <Text style={{ fontSize: 24}}>Homes</Text>
        </View>
        <View>
          <Image style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'}} />
        </View>        
      </View>
    )
  }


  renderHome = item => {
    console.log("itemsss",item);
    return(
      <ImageBackground 
        style={[styles.flex, styles.home, styles.shadow]}
        imageStyle={{ borderRadius: 12 }}
        source={{ uri: item.preview}}
      >
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <View style={{ flex: 0 }}>
              <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
            </View>
            <View style={[styles.column, { flex: 2, paddingHorizontal: 17}]}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.user.name}</Text>
              <Text style={{ color: 'white'}}>
                <Octicons
                  name="location"
                  size={14}
                  color='white'
                />
                <Text> {item.state}</Text>
              </Text>
            </View>
            <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end', }}>
              <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>{item.rating}</Text>
            </View>
          </View>
          <View style={[ styles.column, styles.description,styles.shadow]}>
            <Text style={{fontWeight: 'bold'}}>{item.title}
            </Text>
            <Text style={{color: 'grey'}}>{item.description}
            </Text>
          </View>
      </ImageBackground>
    )
  }

  renderHomes = () => {
    return(
      <View style={[styles.flex, styles.column, styles.homes]}>
        <FlatList 
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow:'visible', height: 280, }}
          data={this.props.homes}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({ item }) => this.renderHome(item)}          
        /> 
        <View style={{width: "100%", flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{justifyContent: 'center', alignItems: 'center',width: 10, height:10, borderRadius:5,  marginRight: 20, backgroundColor: '#1570DF'}}>
            <View style={{width: 6, height: 6, borderRadius: 3, backgroundColor: '#DEDFE8'}}>
            </View>
          </View> 
          <View style={{width: 10, height:10, borderRadius:5,  marginRight: 20, backgroundColor: '#DEDFE8'}}>
          </View> 
          <View style={{width: 10, height:10, borderRadius:5, backgroundColor: '#DEDFE8'}}>
          </View>                        
        </View>                       
      </View>
    )
  }

  renderStars = (rating) => {
    const stars = new Array(5).fill(0);

    return(
      stars.map((_, index) => {
        const activeStar = Math.floor(rating) >= (index + 1);
          return (
            <FontAwesome
              name="star"
              key={`star-${index}`}
              size={14}
              color={activeStar ? '#1577FE' : 'gray'}
            />        
          );
      })
    );
  }

  renderRecommendedList = (item,index) => {
    console.log(item.user);

    return(
      <View style={[styles.recommendation, styles.shadow, {shadowOffset: { width: 0, height: 2 }, shadowColor: '#000', shadowOpacity: 0.2}]}>
        <View style={{flex: 1}}>
          <View style={styles.recommendationHeader}>
            <Image style={{width: '100%', height: undefined, aspectRatio: 1}} source={{uri: item.image[index]}} />
            <View style={styles.recommendationTopInfo}>
              <Text style={{color: 'white'}} >{item.temperature}℃</Text>
              <FontAwesome
                name={item.saved ? 'bookmark' : 'bookmark-o'}
                color='white'
                size={16}
              />              
            </View> 
          </View>       
        </View>
        <View style={{flex: 1, marginLeft: 15, flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <Text style={{fontSize:12, fontWeight: 'bold'}}>{item.title}</Text>
          <Text style={{fontSize: 10, color: 'grey'}}>{item.location}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: "30%"}}>
            {this.renderStars(item.rating)}
            <Text style={{color: '#1577FE'}}>{item.rating}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderRecommended = () => {
    return(
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View style={[styles.row, styles.recommendedHeader]}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize:24}}>Recommended</Text>
          </View>
          <View>
            <Text style={{color: 'grey'}}>More</Text>
          </View>
        </View>
        <View style={[styles.column]}>
          <FlatList
            inverted
            horizontal
            style={{ overflow:'visible', height: 280 }}
            data={this.props.homes}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item,index}) => this.renderRecommendedList(item,index)}
          />        
        </View>
      </View>
    )
  } 



  render() {
    return (
      <View style={[ styles.flex, styles.articles ]}>
        {this.renderHomes()}
        {this.renderRecommended()}
      </View>
    );
  }
}

Discover.defaultProps ={
  homes: mocks
};

export default Discover;

