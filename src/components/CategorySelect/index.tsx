import React from "react";
import { ScrollView, ScrollViewProps } from 'react-native'

import styles from "./styles";
import { Category } from "../Category";
import { categories } from '../../utils/category'


interface PropsCategorySelect extends ScrollViewProps {
  categorySelected: string
  setCategory: (categoryId: string) => void
  hasCheckBox?: boolean
}

export const CategorySelect: React.FC<PropsCategorySelect> = props => {

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
      style={styles.container}
    >
      {categories.map(category => {
        return (
          <Category
            icon={category.icon}
            title={category.title}
            key={category.id}
            onPress={() => props.setCategory(category.id)}
            checked={category.id === props.categorySelected}
            hasCheckBox={props.hasCheckBox}
          />
        )
      })}
    </ScrollView>
  )
}