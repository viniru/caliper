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

module.exports.info  = 'Querying victims.';
let email = 1000000;
let reliefcamp = 1000000;
let victim = 0;
let bc, contx;
module.exports.init = function(blockchain, context, args) {
    bc = blockchain;
    contx = context;

    return Promise.resolve();
};

module.exports.run = function() {
    
    let args;
    if (bc.bcType === 'fabric-ccp') {
        args = {
            chaincodeFunction: 'PrintInfo',
            chaincodeArguments: ["resource","1"]
        };
    } else {
        args = {
            verb: 'PrintInfo',
            food: "resource",
            one: "1"
        };
    }

    return bc.invokeSmartContract(contx, 'disaster', 'v1', args, 30);

   /* victim++;
    let args;

    if (bc.bcType === 'fabric-ccp') {
        args = {
            chaincodeFunction: 'PrintInfo',
            chaincodeArguments: ["victim",victim]
        };
    } else {
        args = {
            verb: 'PrintInfo',
            Type: "victim",
            Victim: victim
        };
    }

    // TODO: until Fabric query is implemented, use invoke
    return bc.invokeSmartContract(contx, 'trade', 'v1', args, 120);
    
*/
   /*reliefcamp = (reliefcamp + 1)%10;
   let health = "good";
   email = email + 1;
   let loc = "abc";
   let descr = "null";


   let args;
   if (bc.bcType === 'fabric-ccp') {
       args = {
           chaincodeFunction: 'RegisterVictim',
           chaincodeArguments: [reliefcamp,health,email,loc,descr],
       };
   } else {
       args = {
           verb: 'RegisterVictim',
           Reliefcamp: reliefcamp,
           Health: health,
           Email: email,
           Location: loc,
           Description: descr
       };
   }

   return bc.invokeSmartContract(contx, 'trade', 'v1', args, 30);*/
};

module.exports.end = function() {
    return Promise.resolve();
};
