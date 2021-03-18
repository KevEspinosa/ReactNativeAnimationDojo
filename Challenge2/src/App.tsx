import * as React from 'react';
import {
    View,
    Text,
    Animated,
    StyleSheet,
    Switch,
    Dimensions
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const EntypoIcon = Animated.createAnimatedComponent(Entypo)

const PaymentSync = () => {
    const [paymentEnabled, changePaymentEnabled] = React.useState(false);

    const onPaymentValueChange = () => {
        changePaymentEnabled(!paymentEnabled);
    }

    const renderPaymentCard = () => {
        const { width } = Dimensions.get("window")
        return (
            <View style={[styles.card, {width: width, marginBottom: 1,}]}>
                <View style={[styles.bubbleStyle]} />
                <Text style={[styles.mainHeadingStyle]}>Payment</Text>
                <Text style={[styles.subHeadingStyle]}>Enable FingerPrint Payment. Make payments using the fingerprint sensor.</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: "100%"}}>
                    <EntypoIcon name="fingerprint" size={42} color="black" style={[{backgroundColor: 'transparent'}]}/>
                    <Switch
                        value={paymentEnabled}
                        onValueChange={onPaymentValueChange}
                        onTintColor="rgb(66, 203, 251)"
                    />
                </View>
            </View>
        )

    }

    const { width } = Dimensions.get("window")

    return(
        <View style={{flex: 1}}>
            <View style={{zIndex: 10, height: '25%', width, backgroundColor: 'rgb(240, 240, 240)' }}/>
            {renderPaymentCard()}
            <View style={{zIndex: 10, height: '25%', width, backgroundColor: 'rgb(240, 240, 240)' }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    defaultHeading: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    mainHeadingStyle: {
        fontSize: 28,
        backgroundColor: 'transparent'
    },
    bubbleStyle: {
        width: 15,
        height: 15,
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 10,
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    subHeadingStyle: {
        textAlign: 'center',
        marginLeft: 10,
        fontSize: 16,
        backgroundColor: 'transparent'
    },
    card: {
        height: "50%",
        width: "80%",
        backgroundColor: 'white',
        shadowOpacity: .4,
        shadowOffset: {width: 0, height: 2},
        shadowColor: 'black',
        shadowRadius: 5,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

export default PaymentSync;