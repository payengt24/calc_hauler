//Global Variables

//-------FASTER RESPONSE CALCULATOR Current Lead
let generateCL;
let closeContractCL;
let lostContractCL;
let contractHaulerCL;
//-------FASTER RESPONSE CALCULATOR SEO/Website
let generateSW;
let closeContractSW;
let lostContractSW;
let contractHaulerSW;

let customerSelfServCL;
let payTeamCL;

//-------SHIFTING CUSTOMERS TO SELF SERVICE Current Lead
let customerSelfServSW;
let payTeamSW;

//-------MOVE OUT RE-CAPTURE CALCULATOR Current Lead

let customerMoveOutCL;
let haulerCurrMoveOutCL;
let improvedRecaptureCL;
let haulerCostToRecaptureCL;

//-------MOVE OUT RE-CAPTURE CALCULATOR SEO/Website

let customerMoveOutSW;
let haulerCurrMoveOutSW;
let improvedRecaptureSW;
let haulerCostToRecaptureSW;

//-------ADDITIONAL SAVINGS Current Lead

let saveFocusinRouteCL;
let densityIncreasesSaveCL;
let saveReducedCL;
let customerGainCL;
let valueOfEachCustCL

//-------ADDITIONAL SAVINGS SEO/Website

let saveFocusinRouteSW;
let densityIncreasesSaveSW;
let saveReducedSW;
let customerGainSW;
let valueOfEachCustSW

function calcFastResponseCL() {
    generateCL = document.getElementById('generateCL').value
    closeContractCL = document.getElementById('closeContractCL').value
    lostContractCL = document.getElementById('lostContractCL').value
    contractHaulerCL = document.getElementById('contractHaulerCL').value
    let newContractCL, numLostContractCL, numFastContractCL;

    if(contractHaulerCL) {
        valueOfEachCustCL = document.getElementById('contractHaulerCL').value
        document.getElementById('valueOfEachCustCL').value = valueOfEachCustCL;
    }

    if (generateCL && closeContractCL) {
        newContractCL = generateCL * (closeContractCL / 100);
        numLostContractCL = generateCL - newContractCL;
        document.getElementById('newContractCL').value = newContractCL;
        document.getElementById('numLostContractCL').value = numLostContractCL;
    } else {
        let elementID = ['newContractCL', 'numLostContractCL', 'numFastContractCL', 'totalBenefitCL']
        resetValue(elementID)
        return;
    }

    if (lostContractCL) {
        numFastContractCL = lostContractCL * numLostContractCL / 100;
        document.getElementById('numFastContractCL').value = numFastContractCL;
    } else {
        let elementID = ['numFastContractCL', 'totalBenefitCL']
        resetValue(elementID)
        return;
    }
    if (contractHaulerCL) {
        document.getElementById('totalBenefitCL').value = numFastContractCL * contractHaulerCL;
    } else {
        let elementID = ['totalBenefitCL']
        resetValue(elementID)
        return

    }
}

function calcFastResponseSW() {
    generateSW = document.getElementById('generateSW').value
    closeContractSW = document.getElementById('closeContractSW').value
    lostContractSW = document.getElementById('lostContractSW').value
    contractHaulerSW = document.getElementById('contractHaulerSW').value
    let newContractSW, numLostContractSW, numFastContractSW;

    if(contractHaulerSW) {
        valueOfEachCustSW = document.getElementById('contractHaulerSW').value
        document.getElementById('valueOfEachCustSW').value = valueOfEachCustSW;
    }

    if (generateSW && closeContractSW) {
        newContractSW = generateSW * (closeContractSW / 100);
        numLostContractSW = generateSW - newContractSW;
        document.getElementById('newContractSW').value = newContractSW;
        document.getElementById('numLostContractSW').value = numLostContractSW;
    } else {
        let elementID = ['newContractSW', 'numLostContractSW', 'numFastContractSW', 'totalBenefitSW']
        resetValue(elementID)
        return;
    }

    if (lostContractSW) {
        numFastContractSW = lostContractSW * numLostContractSW / 100;
        document.getElementById('numFastContractSW').value = numFastContractSW;
    } else {
        let elementID = ['numFastContractSW', 'totalBenefitSW']
        resetValue(elementID)
        return;
    }
    if (contractHaulerSW) {
        document.getElementById('totalBenefitSW').value = numFastContractSW * contractHaulerSW;
    } else {
        let elementID = ['totalBenefitSW']
        resetValue(elementID)
        return;
    }
}

function calcShiftCustomerCL() {
    let newContractCL = document.getElementById('newContractCL').value;
    customerSelfServCL = document.getElementById('customerSelfServCL').value;
    payTeamCL = document.getElementById('payTeamCL').value;
    let contractShiftCL, totalSavedByCusCL;

    if (customerSelfServCL) {
        contractShiftCL = customerSelfServCL / 100 * newContractCL;
        document.getElementById('contractShiftCL').value = contractShiftCL;
    } else {
        let elementID = ['contractShiftCL', 'totalSavedByCusCL']
        resetValue(elementID)
        return;
    }
    if (payTeamCL) {
        totalSavedByCusCL = contractShiftCL * payTeamCL;
        document.getElementById('totalSavedByCusCL').value = totalSavedByCusCL.toFixed(2);
    } else {
        let elementID = ['totalSavedByCusCL']
        resetValue(elementID)
        return;
    }

}

function calcShiftCustomerSW() {
    let newContractSW = document.getElementById('newContractSW').value;
    customerSelfServSW = document.getElementById('customerSelfServSW').value;
    payTeamSW = document.getElementById('payTeamSW').value;
    let contractShiftSW, totalSavedByCusSW;

    if (customerSelfServSW) {
        contractShiftSW = customerSelfServSW / 100 * newContractSW;
        document.getElementById('contractShiftSW').value = contractShiftSW;
    } else {
        let elementID = ['contractShiftSW', 'totalSavedByCusSW']
        resetValue(elementID)
        return;
    }
    if (payTeamSW) {
        totalSavedByCusSW = contractShiftSW * payTeamSW;
        document.getElementById('totalSavedByCusSW').value = totalSavedByCusSW.toFixed(2);
    } else {
        let elementID = ['totalSavedByCusSW']
        resetValue(elementID)
        return;
    }

}

function calcMoveOurRecaptureCL() {
    customerMoveOutCL = document.getElementById('customerMoveOutCL').value
    haulerCurrMoveOutCL = document.getElementById('haulerCurrMoveOutCL').value
    improvedRecaptureCL = document.getElementById('improvedRecaptureCL').value
    haulerCostToRecaptureCL = document.getElementById('haulerCostToRecaptureCL').value

    let percIncressGrossCL, flipContractLostCL, valueNewFlipBusinessCL, numbFlipContractCL, marketAndSaleSaveCL

    if (improvedRecaptureCL && haulerCurrMoveOutCL) {
        percIncressGrossCL = improvedRecaptureCL - haulerCurrMoveOutCL
        document.getElementById('percIncressGrossCL').value = percIncressGrossCL;
    } else {
        let elementID = ['percIncressGrossCL', 'flipContractLostCL', 'valueNewFlipBusinessCL']
        resetValue(elementID)
        return;
    }

    if (percIncressGrossCL && customerMoveOutCL) {
        flipContractLostCL = percIncressGrossCL / 100 * customerMoveOutCL;
        document.getElementById('flipContractLostCL').value = flipContractLostCL.toFixed(2);
    } else {
        let elementID = ['flipContractLostCL', 'valueNewFlipBusinessCL', 'numbFlipContractCL', 'marketAndSaleSaveCL', 'totalSavedViaRouteCL' ]
        resetValue(elementID)
        return;
        
    }

    if (flipContractLostCL) {
        let contractHaulerCL = document.getElementById('contractHaulerCL').value
        valueNewFlipBusinessCL = flipContractLostCL * contractHaulerCL //need to look at contractHaulerCL value, if there is no input this should be blank
        document.getElementById('valueNewFlipBusinessCL').value = valueNewFlipBusinessCL.toFixed(2)
    } else {
        let elementID = ['valueNewFlipBusinessCL']
        resetValue(elementID)
        return;
    }

    if (improvedRecaptureCL && customerMoveOutCL) {
        numbFlipContractCL = (improvedRecaptureCL / 100) * customerMoveOutCL
        document.getElementById('numbFlipContractCL').value = numbFlipContractCL
    } else{
        let elementID = ['numbFlipContractCL', 'marketAndSaleSaveCL', 'totalSavedViaRouteCL']
        resetValue(elementID)
        return;
    }

    if (numbFlipContractCL && haulerCostToRecaptureCL) {
        marketAndSaleSaveCL = numbFlipContractCL * haulerCostToRecaptureCL
        document.getElementById('marketAndSaleSaveCL').value = marketAndSaleSaveCL
    } else {
        let elementID = ['marketAndSaleSaveCL', 'totalSavedViaRouteCL']
        resetValue(elementID)
        return;
    }

    if (marketAndSaleSaveCL && valueNewFlipBusinessCL) {
        totalSavedViaRouteCL = marketAndSaleSaveCL + valueNewFlipBusinessCL
        document.getElementById('totalSavedViaRouteCL').value = totalSavedViaRouteCL.toFixed(2)
    } else {
        let elementID = ['totalSavedViaRouteCL']
        resetValue(elementID)
        return;
    }
}

function calcMoveOurRecaptureSW() {

    customerMoveOutSW = document.getElementById('customerMoveOutSW').value
    haulerCurrMoveOutSW = document.getElementById('haulerCurrMoveOutSW').value
    improvedRecaptureSW = document.getElementById('improvedRecaptureSW').value
    haulerCostToRecaptureSW = document.getElementById('haulerCostToRecaptureSW').value

    let percIncressGrossSW, flipContractLostSW, valueNewFlipBusinessSW, numbFlipContractSW, marketAndSaleSaveSW

    if (improvedRecaptureSW && haulerCurrMoveOutSW) {
        percIncressGrossSW = improvedRecaptureSW - haulerCurrMoveOutSW
        document.getElementById('percIncressGrossSW').value = percIncressGrossSW;
    } else {
        let elementID = ['percIncressGrossSW', 'flipContractLostSW', 'valueNewFlipBusinessSW']
        resetValue(elementID)
        return;
    }

    if (percIncressGrossSW && customerMoveOutSW) {
        flipContractLostSW = percIncressGrossSW / 100 * customerMoveOutSW;
        document.getElementById('flipContractLostSW').value = flipContractLostSW.toFixed(2);
    } else {
        let elementID = ['flipContractLostSW', 'valueNewFlipBusinessSW', 'numbFlipContractSW', 'marketAndSaleSaveSW', 'totalSavedViaRouteSW' ]
        resetValue(elementID)
        return;
        
    }

    if (flipContractLostSW) {
        let contractHaulerSW = document.getElementById('contractHaulerSW').value
        valueNewFlipBusinessSW = flipContractLostSW * contractHaulerSW //need to look at contractHaulerSW value, if there is no input this should be blank
        document.getElementById('valueNewFlipBusinessSW').value = valueNewFlipBusinessSW.toFixed(2)
    } else {
        let elementID = ['valueNewFlipBusinessSW']
        resetValue(elementID)
        return;
    }

    if (improvedRecaptureSW && customerMoveOutSW) {
        numbFlipContractSW = (improvedRecaptureSW / 100) * customerMoveOutSW
        document.getElementById('numbFlipContractSW').value = numbFlipContractSW
    } else{
        let elementID = ['numbFlipContractSW', 'marketAndSaleSaveSW', 'totalSavedViaRouteSW']
        resetValue(elementID)
        return;
    }

    if (numbFlipContractSW && haulerCostToRecaptureSW) {
        marketAndSaleSaveSW = numbFlipContractSW * haulerCostToRecaptureSW
        document.getElementById('marketAndSaleSaveSW').value = marketAndSaleSaveSW
    } else {
        let elementID = ['marketAndSaleSaveSW', 'totalSavedViaRouteSW']
        resetValue(elementID)
        return;
    }

    if (marketAndSaleSaveSW && valueNewFlipBusinessSW) {
        totalSavedViaRouteSW = marketAndSaleSaveSW + valueNewFlipBusinessSW
        document.getElementById('totalSavedViaRouteSW').value = totalSavedViaRouteSW.toFixed(2)
    } else {
        let elementID = ['totalSavedViaRouteSW']
        resetValue(elementID)
        return;
    }

}

function calcAdditionalSavingsCL() {

    saveFocusinRouteCL = document.getElementById('saveFocusinRouteCL').value
    densityIncreasesSaveCL = document.getElementById('densityIncreasesSaveCL').value
    saveReducedCL = document.getElementById('saveReducedCL').value
    customerGainCL = document.getElementById('customerGainCL').value
    contractHaulerCL = document.getElementById('contractHaulerCL').value
    marketAndSaleSaveCL = document.getElementById('marketAndSaleSaveCL').value
    totalBenefitCL = document.getElementById('totalBenefitCL').value
    valueNewFlipBusinessCL = document.getElementById('valueNewFlipBusinessCL').value
    totalSavedByCusCL = document.getElementById('totalSavedByCusCL').value
    valueOfEachCustCL = document.getElementById('valueOfEachCustCL').value



    let totalMobilCusValCL, totalAddSavingsCL, totalPotentialSavingsCL
    if (customerGainCL && valueOfEachCustCL) {
        totalMobilCusValCL = customerGainCL * valueOfEachCustCL;
        document.getElementById('totalMobilCusValCL').value = totalMobilCusValCL
    } else {
        let elementID = ['totalMobilCusValCL']
        resetValue(elementID)
        return;
    }

    if (totalMobilCusValCL && saveReducedCL && densityIncreasesSaveCL && saveFocusinRouteCL) {
        totalAddSavingsCL = parseInt(totalMobilCusValCL) + parseInt(saveReducedCL) + parseInt(densityIncreasesSaveCL) + parseInt(saveFocusinRouteCL)
        document.getElementById('totalAddSavingsCL').value = totalAddSavingsCL
    } else {
        let elementID = ['totalAddSavingsCL']
        resetValue(elementID)
        return;
    }

    if (marketAndSaleSaveCL && totalSavedByCusCL && totalBenefitCL && valueNewFlipBusinessCL && saveFocusinRouteCL && densityIncreasesSaveCL && saveReducedCL && totalMobilCusValCL) {
        totalPotentialSavingsCL = parseInt(marketAndSaleSaveCL) + parseInt(totalSavedByCusCL) + parseInt(totalBenefitCL) + parseInt(valueNewFlipBusinessCL) + parseInt(saveFocusinRouteCL) + parseInt(densityIncreasesSaveCL) + parseInt(saveReducedCL) + parseInt(totalMobilCusValCL)
        document.getElementById('totalPotentialSavingsCL').value = totalPotentialSavingsCL
    } else {
        let elementID = ['totalPotentialSavingsCL']
        resetValue(elementID)
        return;
    }
}

function calcAdditionalSavingsSW() {

    saveFocusinRouteSW = document.getElementById('saveFocusinRouteSW').value
    densityIncreasesSaveSW = document.getElementById('densityIncreasesSaveSW').value
    saveReducedSW = document.getElementById('saveReducedSW').value
    customerGainSW = document.getElementById('customerGainSW').value
    contractHaulerSW = document.getElementById('contractHaulerSW').value
    marketAndSaleSaveSW = document.getElementById('marketAndSaleSaveSW').value
    totalBenefitSW = document.getElementById('totalBenefitSW').value
    valueNewFlipBusinessSW = document.getElementById('valueNewFlipBusinessSW').value
    totalSavedByCusSW = document.getElementById('totalSavedByCusSW').value
    valueOfEachCustSW = document.getElementById('valueOfEachCustSW').value

    document.getElementById('valueOfEachCustSW').value = valueOfEachCustSW

    let totalMobilCusValSW, totalAddSavingsSW, totalPotentialSavingsSW
    if (customerGainSW && valueOfEachCustSW) {
        totalMobilCusValSW = customerGainSW * valueOfEachCustSW;
        document.getElementById('totalMobilCusValSW').value = totalMobilCusValSW
    } else {
        let elementID = ['totalMobilCusValSW']
        resetValue(elementID)
        return;
    }

    if (totalMobilCusValSW && saveReducedSW && densityIncreasesSaveSW && saveFocusinRouteSW) {
        totalAddSavingsSW = parseInt(totalMobilCusValSW) + parseInt(saveReducedSW) + parseInt(densityIncreasesSaveSW) + parseInt(saveFocusinRouteSW)
        document.getElementById('totalAddSavingsSW').value = totalAddSavingsSW
    } else {
        let elementID = ['totalAddSavingsSW']
        resetValue(elementID)
        return;
    }

    if (marketAndSaleSaveSW && totalSavedByCusSW && totalBenefitSW && valueNewFlipBusinessSW && saveFocusinRouteSW && densityIncreasesSaveSW && saveReducedSW && totalMobilCusValSW) {
        totalPotentialSavingsSW = parseInt(marketAndSaleSaveSW) + parseInt(totalSavedByCusSW) + parseInt(totalBenefitSW) + parseInt(valueNewFlipBusinessSW) + parseInt(saveFocusinRouteSW) + parseInt(densityIncreasesSaveSW) + parseInt(saveReducedSW) + parseInt(totalMobilCusValSW)
        document.getElementById('totalPotentialSavingsSW').value = totalPotentialSavingsSW
    } else {
        let elementID = ['totalPotentialSavingsSW']
        resetValue(elementID)
        return;
    }
}

function resetValue(elementID) {
    for(let i = 0; i < elementID.length; i++){
        document.getElementById(elementID[i]).value = '';
    }
}