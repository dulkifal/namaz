import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';

import Select from "./comp/Select"

var items = [
  {
    id: 1,
    name: 'Malappuram',
  },
  {
    id: 2,
    name: 'Kozhikode',
  },
  {
    id: 3,
    name: 'Kannur',
  },
  {
    id: 4,
    name: 'Wayanad',
  },
  {
    id: 5,
    name: 'Kasarkod',
  },
  {
    id: 6,
    name: 'Thrisur',
  },
  {
    id: 7,
    name: 'Aranakulam',
  },
  {
    id: 8,
    name: 'Palakad',
  },
];
class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [
        {
          id: 7,
          name: 'Aranakulam',
        },
        {
          id: 8,
          name: 'Palakad',
        }
      ]
    }
  }
  render() {
  return (
        <Fragment>
          <Select
                    label="asdf"
                    selected={null}
                    opts={[]}
                    onChange={(e) => {
                    console.log(e)
                    }}
                  />
          <SearchableDropdown
            onItemSelect={(item) => {
              const items = this.state.selectedItems;
              items.push(item)
              this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            selectedItems={this.state.selectedItems}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
         
            resetValue={false}
            textInputProps={
              {
                placeholder: "Location",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                onTextChange: text => console.log(text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
      </Fragment>
  );
  }
}

export default Location;
