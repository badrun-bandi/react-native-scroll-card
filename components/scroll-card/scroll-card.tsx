import { FlatList, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Card, Rating } from "react-native-elements";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import React, { Component } from "react";

interface Props {
    title: String;
    data:any;
}

interface State {
    visible:boolean;
    details:any;
}

export default class ScrollCard extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
        visible: false,
        details:''
    }
  }
  
  styles = StyleSheet.create({
    title:{
      margin: 10,
      fontSize: 20,
      fontWeight:'bold' 
    },
    view: {
      marginLeft: 0,
      height: 560,
      width: 140,
      backgroundColor:'white', 
      padding: 0, 
      margin:15
    },
    card: {
      height: 160,
      width: 160,
      backgroundColor:'white', 
      borderColor: 'white',
      elevation:0,
      bottom:0,
      padding: 0, 
      borderWidth:0, 
      margin:0,
    },
    image: {
      width: 180,
      height: 180,
    },
    imageWrapper: {
      width: 140,
      height: 140,
      borderWidth:0, 
      borderRadius: 20,
      overflow: 'hidden',
    },
    rating:{
      backgroundColor:'white', 
      left:30, 
      padding: 0, 
      margin:0, 
      width:13,
      height:13,
      marginTop: 5,
    }
  });
  
  handleClick(url:String, e:EventTarget) {
    console.log(url);
    this.setState({ visible:true, details: url });
  }

  render() {
    return (
      <View >
      <Text style={this.styles.title}>
        {this.props.title}
      </Text>
      <FlatList<any>
        horizontal
        data={this.props.data}
        style={{ backgroundColor:'white' }}
        renderItem={({ item: rowData }) => {
          return (
            <View style={this.styles.view}>
              <TouchableOpacity onPress={(e) => this.handleClick(rowData.image.uri, e)}> 
                <Card                                                                                                                             
                  image={{ uri: rowData.image.uri }}
                  containerStyle={this.styles.card}
                  imageStyle={this.styles.image}
                  imageWrapperStyle={this.styles.imageWrapper}
                >
                </Card>
              </TouchableOpacity>
              <Text style={{ margin: 0, fontSize:10}}>
                {rowData.category}
              </Text>
              <Rating
                count={5}
                imageSize={15}
                fractions={0.5}
                startingValue={rowData.rating}
                style={this.styles.rating}
              />
              <TouchableOpacity onPress={(e) => this.handleClick(rowData.image.uri, e)}> 
                <Text style={{ marginTop: 5, fontWeight:'bold' }}>
                  {rowData.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item:any, index) => index.toString()}
      />
        <Dialog
        visible={this.state.visible}
        onTouchOutside={() => {
          this.setState({ visible: false });
        }}
        >
        <DialogContent>
          <Text>{this.state.details}</Text>
        </DialogContent>
      </Dialog>
      </View>
    );
  }
}