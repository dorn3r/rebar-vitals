import * as alt from 'alt-server';
import { VITAL_NAMES } from '../shared/enums.js';
import { VitalsSystem } from './index.js';

import { useRebar } from '@Server/index.js';

const Rebar = useRebar();
const messenger = Rebar.messenger.useMessenger();

function byID(id: number | string): alt.Player {
        
        if (typeof id === 'string') {
            id = parseInt(id);
        }

        return alt.Player.all.find((target) => {
            if (!target || !target.valid) {
                return false;
            }
    
            if (target.id !== id) {
                return false;
            }
    
            return true;
        });
    }

messenger.commands.register({
    name: '/setfood',
    desc: '/setfood [id] [amount]',
    options: { accountPermissions: ['admin'] },
    callback: (player: alt.Player, id: number ,commandValue: string) => {
        try {
            let value = parseInt(commandValue);

            if (isNaN(value)) {
                messenger.message.send(player, { type: 'warning', content: 'Value must be a number.' });
                return;
            }

            const target = byID(id)

            if(!target) {
                messenger.message.send(player, { type: 'warning', content: 'No players with id.' });
                return;
            }

            value = VitalsSystem.normalizeVital(value);
            VitalsSystem.adjustVital(target, VITAL_NAMES.FOOD, value, true);
        } catch (err) {
            messenger.message.send(player, { type: 'warning', content: 'Value must be a number.' });
        }
    },
});

messenger.commands.register({
    name: '/setwater',
    desc: '/setwater [id] [amount]',
    options: { accountPermissions: ['admin'] },
    callback: (player: alt.Player, id: number ,commandValue: string) => {
        try {
            let value = parseInt(commandValue);

            if (isNaN(value)) {
                messenger.message.send(player, { type: 'warning', content: 'Value must be a number.' });
                return;
            }

            const target = byID(id)

            if(!target) {
                messenger.message.send(player, { type: 'warning', content: 'No players with id.' });
                return;
            }

            value = VitalsSystem.normalizeVital(value);
            VitalsSystem.adjustVital(target, VITAL_NAMES.WATER, value, true);
        } catch (err) {
            messenger.message.send(player, { type: 'warning', content: 'Value must be a number.' });
        }
    },
});

messenger.commands.register({
    name: '/setneeds',
    desc: '/setneeds [id] [amount]',
    options: { accountPermissions: ['admin'] },
    callback: (player: alt.Player, id: number ,commandValue: string) => {
        try {
            let value = parseInt(commandValue);

            if (isNaN(value)) {
                messenger.message.send(player, { type: 'warning', content: 'Value must be a number.' });
                return;
            }

            const target = byID(id)

            if(!target) {
                messenger.message.send(player, { type: 'warning', content: 'No players with id.' });
                return;
            }

            value = VitalsSystem.normalizeVital(value);
            
            VitalsSystem.adjustVital(target, VITAL_NAMES.FOOD, value, true);
            VitalsSystem.adjustVital(target, VITAL_NAMES.WATER, value, true);} catch (err) {
            messenger.message.send(player, { type: 'warning', content: 'Value must be a number.' });
        }
    },
});
