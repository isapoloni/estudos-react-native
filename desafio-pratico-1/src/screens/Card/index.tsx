import { View, Text, TouchableOpacity } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Feather from '@expo/vector-icons/Feather';

import colors from '../../styles/colors';
import { styles } from './styles'
import { useState } from 'react';

type Props = {
    task: string;
    onRemove: () => void;
    onToggle: (checked: boolean) => void;
}

export function Card({ task, onRemove, onToggle  }: Props) {
    const [isChecked, setIsChecked] = useState(false);
    
    function handleCheck(checked: boolean) {
        setIsChecked(checked);
        onToggle(checked);  
    }

    return (
        <View style={styles.containerCard}>
            <BouncyCheckbox
                size={20}
                fillColor={isChecked ? colors['purple'] : colors['blue']}
                unFillColor={colors['gray-400']}
                innerIconStyle={{ borderWidth: 1 }}
                isChecked={isChecked}
                onPress={(checked: boolean) => handleCheck(checked)}                
                text={task}
                textStyle={[
                    styles.textCard,
                    {
                        color: isChecked? colors['gray-300'] : colors['gray-100'], 
                        textDecorationLine: isChecked ? 'line-through' : 'none',
                    }
                ]}
                style={{ flex: 1 }}
            />
            <TouchableOpacity onPress={onRemove}>
                <Feather name="trash-2" size={20} color={colors["gray-300"]} />
            </TouchableOpacity>
        </View>
    )
}