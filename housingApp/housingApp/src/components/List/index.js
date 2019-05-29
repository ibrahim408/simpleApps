import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, ScrollView, Dimensions, ImageBackground, Image} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

const { width, height} = Dimensions.get('screen');
const mocks = [
  {
    id: 1,
    user: {
      name: 'Ryan Buckets',
      avatar: 'https://images.unsplash.com/photo-1489779162738-f81aed9b0a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=782&q=80'
    },
    location: 'San Jose',
    state: 'California',
    temperature: 85,
    title: 'Palms at Morada',
    description: 'Live an extravagant life at The Palms at Morada! The Palms at Morada... Come for the Location, Stay for the Lifestyle.',
    rating: 3.7,
    reviews: 321,
    preview: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    image: [
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 2,
    user: {
      name: 'Mike Bruce',
      avatar: 'https://images.unsplash.com/photo-1491617636265-a676d2700d7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    location: 'Las Vegas',
    state: 'Nevada',
    temperature: 85,
    title: 'Renaissance Villas',
    description: 'Abundant amenities and minutes from Main Street shopping, dining and entertainment.',
    rating: 4.4,
    reviews: 321,
    preview: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80',
    image: [
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 3,
    user: {
      name: 'Jessica Lee',
      avatar: 'https://images.unsplash.com/photo-1506956191951-7a88da4435e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
    },
    location: 'New York',
    state: 'New York',    
    temperature: 85,
    title: 'The Jefferson',
    description: ' Far from ordinary. New luxury apartments in the heart of the charming and historic village of Farmingdale.',
    rating: 4.8,
    reviews: 321,
    preview: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    image: [
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
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
  }
});

class List extends Component {
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
      </View>
    )
  }

  renderRecommended = () => {
    return(
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <Text>Recommended</Text>
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

List.defaultProps ={
  homes: mocks
};

export default List;

