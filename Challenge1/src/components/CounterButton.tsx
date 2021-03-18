import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CounterButton = () => {
    const [open, changeOpen] = React.useState(0);
    const [counter, changeCounter] = React.useState(1);

    const startCounterAnimation = () => {
        if (!open){
            changeOpen(1)
        } else {
            increaseCount()
        }
    }

    const increaseCount = () => {
        changeCounter(counter + 1)
    }

    const decreaseCount = () => {
        if (counter > 1){
            changeCounter(counter - 1)
        }
    }

    return(
        <View style={{flexDirection: 'row'}}>
            <View style={[styles.counterDisplayStyle]}>
                <Text style={[styles.quantityTextStyle]}>{counter}</Text>
            </View>
            <TouchableWithoutFeedback onPress={decreaseCount}>
                <View style={[styles.counterDefaultStyle, styles.counterDecrementStyle]}>
                    <Ionicons name="md-remove" size={32} color="rgb(130, 130, 130)" />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={startCounterAnimation}>
                <View style={[styles.counterDefaultStyle, styles.counterIncrementStyle]}>
                    <Ionicons name="md-add" size={32} color="white" />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    counterDefaultStyle: {
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: .3,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'black',
        paddingTop: 4
    },
    counterIncrementStyle: {
        backgroundColor: 'rgb(49, 186, 201)',
    },
    counterDecrementStyle: {
        backgroundColor: 'white',
        borderColor: 'rgb(130, 130, 130)',
        borderWidth: 3,
    },
    counterDisplayStyle: {
        backgroundColor: 'rgb(240, 240, 240)',
        borderRadius: 30,
        borderColor: 'rgb(240, 240, 240)',
        borderWidth: 1,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    quantityTextStyle: {
        fontSize: 28,
        color: 'rgb(130, 130, 130)'
    }
})

export default CounterButton;