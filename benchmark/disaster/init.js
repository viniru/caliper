/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports.info  = 'Registering Victims';

let em = 0;
let reliefcamp = 0;
let bc, contx;

module.exports.init = function(blockchain, context, args) {
    bc = blockchain;
    contx = context;

    return Promise.resolve();
};

module.exports.run = function() {
    em++;
    let args;
    if (bc.bcType === 'fabric-ccp') {
        args = {
            chaincodeFunction: 'AddAsset',
            chaincodeArguments: ["food","1","A","b","c","d","e","f",em.toString()]
        };
    } else {
        args = {
            verb: 'AddAsset',
            food: "food",
            one: "1",
            two: "A",
            three: "b",
            four: "c",
            five: "d",
            six: "e",
            seven: "f",
            eight: em.toString()
        };
    }

    return bc.invokeSmartContract(contx, 'disaster', 'v1', args, 30);
};

module.exports.end = function() {
    return Promise.resolve();
};
