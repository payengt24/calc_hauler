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

//-------ADDITIONAL SAVINGS SEO/Website

let saveFocusinRouteSW;
let densityIncreasesSaveSW;
let saveReducedSW;
let customerGainSW;





function calcFastResponseCL() {
    generateCL = document.getElementById('generateCL').value
    closeContractCL = document.getElementById('closeContractCL').value
    lostContractCL = document.getElementById('lostContractCL').value
    contractHaulerCL = document.getElementById('contractHaulerCL').value
    console.log('in calcFastResponseCL')
    let newContractCL, numLostContractCL, numFastContractCL;
    if (generateCL && closeContractCL) {
        newContractCL = generateCL * (closeContractCL / 100);
        numLostContractCL = generateCL - newContractCL;
        document.getElementById('newContractCL').value = newContractCL;
        document.getElementById('numLostContractCL').value = numLostContractCL;
    } else {
        document.getElementById('newContractCL').value = '';
        document.getElementById('numLostContractCL').value = '';
        document.getElementById('numFastContractCL').value = '';
        document.getElementById('totalBenefitCL').value = '';
        return;
    }

    if (lostContractCL) {
        numFastContractCL = lostContractCL * numLostContractCL / 100;
        document.getElementById('numFastContractCL').value = numFastContractCL;
    } else {
        document.getElementById('numFastContractCL').value = '';
        document.getElementById('totalBenefitCL').value = '';
        return;
    }
    if (contractHaulerCL) {
        console.log('contractHaulerCL', typeof (contractHaulerCL));

        document.getElementById('totalBenefitCL').value = numFastContractCL * contractHaulerCL;
    }
}

function calcFastResponseSW() {
    generateSW = document.getElementById('generateSW').value
    closeContractSW = document.getElementById('closeContractSW').value
    lostContractSW = document.getElementById('lostContractSW').value
    contractHaulerSW = document.getElementById('contractHaulerSW').value
    console.log('in calcFastResponseSW')
    let newContractSW, numLostContractSW, numFastContractSW;
    if (generateSW && closeContractSW) {
        newContractSW = generateSW * (closeContractSW / 100);
        numLostContractSW = generateSW - newContractSW;
        document.getElementById('newContractSW').value = newContractSW;
        document.getElementById('numLostContractSW').value = numLostContractSW;
    } else {
        document.getElementById('newContractSW').value = '';
        document.getElementById('numLostContractSW').value = '';
        document.getElementById('numFastContractSW').value = '';
        document.getElementById('totalBenefitSW').value = '';
        return;
    }

    if (lostContractSW) {
        numFastContractSW = lostContractSW * numLostContractSW / 100;
        document.getElementById('numFastContractSW').value = numFastContractSW;
    } else {
        document.getElementById('numFastContractSW').value = '';
        document.getElementById('totalBenefitSW').value = '';
        return;
    }
    if (contractHaulerSW) {
        console.log('contractHaulerSW', typeof (contractHaulerSW));

        document.getElementById('totalBenefitSW').value = numFastContractSW * contractHaulerSW;
    }
}

function calcShiftCustomerLD() {
    let newContractCL = document.getElementById('newContractCL').value;
    customerSelfServCL = document.getElementById('customerSelfServCL').value;
    payTeamCL = document.getElementById('payTeamCL').value;
    let contractShiftCL, totalSavedByCusCL;

    if (customerSelfServCL) {
        contractShiftCL = customerSelfServCL / 100 * newContractCL;
        document.getElementById('contractShiftCL').value = contractShiftCL;
    }

    if (payTeamCL) {
        totalSavedByCusCL = contractShiftCL * payTeamCL;
        document.getElementById('totalSavedByCusCL').value = totalSavedByCusCL;
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
    }

    if (payTeamSW) {
        totalSavedByCusSW = contractShiftSW * payTeamSW;
        document.getElementById('totalSavedByCusSW').value = totalSavedByCusSW;
    }

}

function calcMoveOurRecaptureLD() {
    customerMoveOutCL = document.getElementById('customerMoveOutCL').value
    haulerCurrMoveOutCL = document.getElementById('haulerCurrMoveOutCL').value
    improvedRecaptureCL = document.getElementById('improvedRecaptureCL').value
    haulerCostToRecaptureCL = document.getElementById('haulerCostToRecaptureCL').value

    let percIncressGrossCL, flipContractLostCL, valueNewFlipBusinessCL, numbFlipContractCL, marketAndSaleSaveCL

    if (improvedRecaptureCL && haulerCurrMoveOutCL) {
        percIncressGrossCL = improvedRecaptureCL - haulerCurrMoveOutCL
        document.getElementById('percIncressGrossCL').value = percIncressGrossCL;
    } else {
        return
    }

    if (percIncressGrossCL && customerMoveOutCL) {
        flipContractLostCL = percIncressGrossCL / 100 * customerMoveOutCL;
        document.getElementById('flipContractLostCL').value = flipContractLostCL.toFixed(2);
    } else {
        return
    }

    if (flipContractLostCL) {
        let contractHaulerCL = document.getElementById('contractHaulerCL').value
        valueNewFlipBusinessCL = flipContractLostCL * contractHaulerCL
        document.getElementById('valueNewFlipBusinessCL').value = valueNewFlipBusinessCL.toFixed(2)
    } else {
        return
    }

    if (improvedRecaptureCL && customerMoveOutCL) {
        numbFlipContractCL = (improvedRecaptureCL / 100) * customerMoveOutCL
        document.getElementById('numbFlipContractCL').value = numbFlipContractCL
    } else {
        return
    }

    if (numbFlipContractCL && haulerCostToRecaptureCL) {
        marketAndSaleSaveCL = numbFlipContractCL * haulerCostToRecaptureCL
        document.getElementById('marketAndSaleSaveCL').value = marketAndSaleSaveCL
    } else {
        return
    }

    if (marketAndSaleSaveCL && valueNewFlipBusinessCL) {
        totalSavedViaRouteCL = marketAndSaleSaveCL + valueNewFlipBusinessCL
        document.getElementById('totalSavedViaRouteCL').value = totalSavedViaRouteCL.toFixed(2)
    } else {
        return
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
        return
    }

    if (percIncressGrossSW && customerMoveOutSW) {
        flipContractLostSW = percIncressGrossSW / 100 * customerMoveOutSW;
        document.getElementById('flipContractLostSW').value = flipContractLostSW.toFixed(2);
    } else {
        return
    }

    if (flipContractLostSW) {
        let contractHaulerSW = document.getElementById('contractHaulerSW').value
        valueNewFlipBusinessSW = flipContractLostSW * contractHaulerSW
        document.getElementById('valueNewFlipBusinessSW').value = valueNewFlipBusinessSW.toFixed(2)
    } else {
        return
    }

    if (improvedRecaptureSW && customerMoveOutSW) {
        numbFlipContractSW = (improvedRecaptureSW / 100) * customerMoveOutSW
        document.getElementById('numbFlipContractSW').value = numbFlipContractSW
    } else {
        return
    }

    if (numbFlipContractSW && haulerCostToRecaptureSW) {
        marketAndSaleSaveSW = numbFlipContractSW * haulerCostToRecaptureSW
        document.getElementById('marketAndSaleSaveSW').value = marketAndSaleSaveSW
    } else {
        return
    }

    if (marketAndSaleSaveSW && valueNewFlipBusinessSW) {
        totalSavedViaRouteSW = marketAndSaleSaveSW + valueNewFlipBusinessSW
        document.getElementById('totalSavedViaRouteSW').value = totalSavedViaRouteSW.toFixed(2)
    } else {
        return
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
    valueOfEachCustCL = contractHaulerCL

    document.getElementById('valueOfEachCustCL').value = valueOfEachCustCL

    let totalMobilCusValCL, totalAddSavingsCL, totalPotentialSavingsCL
    if (customerGainCL && valueOfEachCustCL) {
        totalMobilCusValCL = customerGainCL * valueOfEachCustCL;
        document.getElementById('totalMobilCusValCL').value = totalMobilCusValCL
    } else {
        return
    }

    if (totalMobilCusValCL && saveReducedCL && densityIncreasesSaveCL && saveFocusinRouteCL) {
        totalAddSavingsCL = parseInt(totalMobilCusValCL) + parseInt(saveReducedCL) + parseInt(densityIncreasesSaveCL) + parseInt(saveFocusinRouteCL)
        document.getElementById('totalAddSavingsCL').value = totalAddSavingsCL
    } else {
        return
    }

    if (marketAndSaleSaveCL && totalSavedByCusCL && totalBenefitCL && valueNewFlipBusinessCL && saveFocusinRouteCL && densityIncreasesSaveCL && saveReducedCL && totalMobilCusValCL) {
        totalPotentialSavingsCL = parseInt(marketAndSaleSaveCL) + parseInt(totalSavedByCusCL) + parseInt(totalBenefitCL) + parseInt(valueNewFlipBusinessCL) + parseInt(saveFocusinRouteCL) + parseInt(densityIncreasesSaveCL) + parseInt(saveReducedCL) + parseInt(totalMobilCusValCL)
        document.getElementById('totalPotentialSavingsCL').value = totalPotentialSavingsCL
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
    valueOfEachCustSW = contractHaulerSW

    document.getElementById('valueOfEachCustSW').value = valueOfEachCustSW

    let totalMobilCusValSW, totalAddSavingsSW, totalPotentialSavingsSW
    if (customerGainSW && valueOfEachCustSW) {
        totalMobilCusValSW = customerGainSW * valueOfEachCustSW;
        document.getElementById('totalMobilCusValSW').value = totalMobilCusValSW
    } else {
        return
    }

    if (totalMobilCusValSW && saveReducedSW && densityIncreasesSaveSW && saveFocusinRouteSW) {
        totalAddSavingsSW = parseInt(totalMobilCusValSW) + parseInt(saveReducedSW) + parseInt(densityIncreasesSaveSW) + parseInt(saveFocusinRouteSW)
        document.getElementById('totalAddSavingsSW').value = totalAddSavingsSW
    } else {
        return
    }

    if (marketAndSaleSaveSW && totalSavedByCusSW && totalBenefitSW && valueNewFlipBusinessSW && saveFocusinRouteSW && densityIncreasesSaveSW && saveReducedSW && totalMobilCusValSW) {
        totalPotentialSavingsSW = parseInt(marketAndSaleSaveSW) + parseInt(totalSavedByCusSW) + parseInt(totalBenefitSW) + parseInt(valueNewFlipBusinessSW) + parseInt(saveFocusinRouteSW) + parseInt(densityIncreasesSaveSW) + parseInt(saveReducedSW) + parseInt(totalMobilCusValSW)
        document.getElementById('totalPotentialSavingsSW').value = totalPotentialSavingsSW
    }
}