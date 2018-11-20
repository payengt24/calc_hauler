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

function getElementValue(id) {
    return document.getElementById(id).value;
}

function setElementValue(id, value) {
    document.getElementById(id).value = value;
}

function calcFastResponseCL() {
    generateCL = getElementValue('generateCL');
    closeContractCL = getElementValue('closeContractCL');
    lostContractCL = getElementValue('lostContractCL');
    contractHaulerCL = getElementValue('contractHaulerCL');

    let newContractCL, numLostContractCL, numFastContractCL;

    if (generateCL && closeContractCL) {
        newContractCL = generateCL * (closeContractCL / 100);
        numLostContractCL = generateCL - newContractCL
        setElementValue('newContractCL', newContractCL);
        setElementValue('numLostContractCL', numLostContractCL);
        calcShiftCustomerCL()
    } else {
        let elementID = ['newContractCL', 'numLostContractCL', 'numFastContractCL', 'totalBenefitCL', 'contractShiftCL', 'totalSavedByCusCL', 'totalPotentialSavingsCL'];
        resetValue(elementID);
        return;
    }

    if (lostContractCL) {
        numFastContractCL = lostContractCL * numLostContractCL / 100;
        setElementValue('numFastContractCL', numFastContractCL);
    } else {
        let elementID = ['numFastContractCL', 'totalBenefitCL', 'totalPotentialSavingsCL'];
        resetValue(elementID);
        return;
    }

    if (contractHaulerCL) {
        let totalBenefitCL = numFastContractCL * contractHaulerCL;
        setElementValue('totalBenefitCL', totalBenefitCL);
        valueOfEachCustCL = getElementValue('contractHaulerCL');
        setElementValue('valueOfEachCustCL', valueOfEachCustCL);
        calcMoveOurRecaptureCL();
        calcAdditionalSavingsCL();
    } else {
        let elementID = ['totalBenefitCL', 'valueNewFlipBusinessCL', 'valueOfEachCustCL', 'totalMobilCusValCL', 'totalAddSavingsCL', 'totalPotentialSavingsCL'];
        resetValue(elementID);
        return
    }
}

function calcFastResponseSW() {
    generateSW = getElementValue('generateSW');
    closeContractSW = getElementValue('closeContractSW');
    lostContractSW = getElementValue('lostContractSW');
    contractHaulerSW = getElementValue('contractHaulerSW');
    let newContractSW, numLostContractSW, numFastContractSW;

    if (generateSW && closeContractSW) {
        newContractSW = generateSW * (closeContractSW / 100);
        numLostContractSW = generateSW - newContractSW
        setElementValue('newContractSW', newContractSW);
        setElementValue('numLostContractSW', numLostContractSW);
        calcShiftCustomerSW()
    } else {
        let elementID = ['newContractSW', 'numLostContractSW', 'numFastContractSW', 'totalBenefitSW', 'contractShiftSW', 'totalSavedByCusSW', 'totalPotentialSavingsSW'];
        resetValue(elementID);
        return;
    }

    if (lostContractSW) {
        numFastContractSW = lostContractSW * numLostContractSW / 100;
        setElementValue('numFastContractSW', numFastContractSW);
    } else {
        let elementID = ['numFastContractSW', 'totalBenefitSW', 'totalPotentialSavingsSW'];
        resetValue(elementID);
        return;
    }

    if (contractHaulerSW) {
        let totalBenefitSW = numFastContractSW * contractHaulerSW;
        setElementValue('totalBenefitSW', totalBenefitSW);
        valueOfEachCustSW = getElementValue('contractHaulerSW');
        setElementValue('valueOfEachCustSW', valueOfEachCustSW);
        calcMoveOurRecaptureSW();
        calcAdditionalSavingsSW();
    } else {
        let elementID = ['totalBenefitSW', 'valueNewFlipBusinessSW', 'valueOfEachCustSW', 'totalMobilCusValSW', 'totalAddSavingsSW', 'totalPotentialSavingsSW'];
        resetValue(elementID);
        return
    }
}

function calcShiftCustomerCL() {
    let newContractCL = getElementValue('newContractCL');
    customerSelfServCL = getElementValue('customerSelfServCL');
    payTeamCL = getElementValue('payTeamCL');
    let contractShiftCL, totalSavedByCusCL;

    if (customerSelfServCL) {
        contractShiftCL = customerSelfServCL / 100 * newContractCL;
        setElementValue('contractShiftCL', contractShiftCL);
    } else {
        let elementID = ['contractShiftCL', 'totalSavedByCusCL', 'totalPotentialSavingsCL']
        resetValue(elementID);
        return;
    }

    if (payTeamCL) {
        totalSavedByCusCL = contractShiftCL * payTeamCL;
        setElementValue('totalSavedByCusCL', totalSavedByCusCL.toFixed(2));
        calcAdditionalSavingsCL()
    } else {
        let elementID = ['totalSavedByCusCL', 'totalPotentialSavingsCL']
        resetValue(elementID);
        return;
    }
}

function calcShiftCustomerSW() {
    let newContractSW = getElementValue('newContractSW');
    customerSelfServSW = getElementValue('customerSelfServSW');
    payTeamSW = getElementValue('payTeamSW');
    let contractShiftSW, totalSavedByCusSW;

    if (customerSelfServSW) {
        contractShiftSW = customerSelfServSW / 100 * newContractSW;
        setElementValue('contractShiftSW', contractShiftSW);
    } else {
        let elementID = ['contractShiftSW', 'totalSavedByCusSW', 'totalPotentialSavingsSW']
        resetValue(elementID);
        return;
    }

    if (payTeamSW) {
        totalSavedByCusSW = contractShiftSW * payTeamSW;
        setElementValue('totalSavedByCusSW', totalSavedByCusSW.toFixed(2));
        calcAdditionalSavingsSW()
    } else {
        let elementID = ['totalSavedByCusSW', 'totalPotentialSavingsSW']
        resetValue(elementID);
        return;
    }
}

function calcMoveOurRecaptureCL() {
    customerMoveOutCL = getElementValue('customerMoveOutCL');
    haulerCurrMoveOutCL = getElementValue('haulerCurrMoveOutCL');
    improvedRecaptureCL = getElementValue('improvedRecaptureCL');
    haulerCostToRecaptureCL = getElementValue('haulerCostToRecaptureCL');

    let percIncressGrossCL, flipContractLostCL, valueNewFlipBusinessCL, numbFlipContractCL, marketAndSaleSaveCL;

    if (improvedRecaptureCL) {

        if (haulerCurrMoveOutCL) {
            percIncressGrossCL = improvedRecaptureCL - haulerCurrMoveOutCL;
            setElementValue('percIncressGrossCL', percIncressGrossCL);
        } else {
            let elementID = ['percIncressGrossCL', 'flipContractLostCL', 'valueNewFlipBusinessCL', 'totalPotentialSavingsCL'];
            resetValue(elementID);
            return;
        }

    } else {
        let elementID = ['percIncressGrossCL', 'flipContractLostCL', 'valueNewFlipBusinessCL', 'marketAndSaleSaveCL', 'numbFlipContractCL', 'totalSavedViaRouteCL', 'totalPotentialSavingsCL'];
        resetValue(elementID);
        return;
    }

    if (percIncressGrossCL && customerMoveOutCL) {
        flipContractLostCL = percIncressGrossCL / 100 * customerMoveOutCL;
        setElementValue('flipContractLostCL', flipContractLostCL.toFixed(2));
    } else {
        let elementID = ['flipContractLostCL', 'valueNewFlipBusinessCL', 'numbFlipContractCL', 'marketAndSaleSaveCL', 'totalSavedViaRouteCL', 'totalSavedViaRouteCL', 'totalPotentialSavingsCL'];
        resetValue(elementID);
        return;
    }

    if (flipContractLostCL) {
        let contractHaulerCL = getElementValue('contractHaulerCL');
        valueNewFlipBusinessCL = flipContractLostCL * contractHaulerCL;
        setElementValue('valueNewFlipBusinessCL', valueNewFlipBusinessCL.toFixed(2));
        calcAdditionalSavingsCL()
    } else {
        let elementID = ['valueNewFlipBusinessCL', 'totalPotentialSavingsCL'];
        resetValue(elementID);
        return;
    }

    if (customerMoveOutCL) {
        numbFlipContractCL = (improvedRecaptureCL / 100) * customerMoveOutCL;
        setElementValue('numbFlipContractCL', numbFlipContractCL);
    } else {
        let elementID = ['numbFlipContractCL', 'marketAndSaleSaveCL', 'totalSavedViaRouteCL', 'totalSavedViaRouteCL', 'totalPotentialSavingsCL'];
        resetValue(elementID);
        return;
    }

    if (numbFlipContractCL && haulerCostToRecaptureCL) {
        marketAndSaleSaveCL = numbFlipContractCL * haulerCostToRecaptureCL;
        setElementValue('marketAndSaleSaveCL', marketAndSaleSaveCL);
        calcAdditionalSavingsCL()
    } else {
        let elementID = ['marketAndSaleSaveCL', 'totalSavedViaRouteCL', 'totalPotentialSavingsCL'];
        resetValue(elementID);
        return;
    }

    if (marketAndSaleSaveCL && valueNewFlipBusinessCL) {
        totalSavedViaRouteCL = marketAndSaleSaveCL + valueNewFlipBusinessCL;
        setElementValue('totalSavedViaRouteCL', totalSavedViaRouteCL.toFixed(2));
    } else {
        let elementID = ['totalSavedViaRouteCL'];
        resetValue(elementID);
        return;
    }
}

function calcMoveOurRecaptureSW() {

    customerMoveOutSW = getElementValue('customerMoveOutSW');
    haulerCurrMoveOutSW = getElementValue('haulerCurrMoveOutSW');
    improvedRecaptureSW = getElementValue('improvedRecaptureSW');
    haulerCostToRecaptureSW = getElementValue('haulerCostToRecaptureSW');

    let percIncressGrossSW, flipContractLostSW, valueNewFlipBusinessSW, numbFlipContractSW, marketAndSaleSaveSW;

    if (improvedRecaptureSW) {

        if (haulerCurrMoveOutSW) {
            percIncressGrossSW = improvedRecaptureSW - haulerCurrMoveOutSW;
            setElementValue('percIncressGrossSW', percIncressGrossSW);
        } else {
            let elementID = ['percIncressGrossSW', 'flipContractLostSW', 'valueNewFlipBusinessSW', 'totalPotentialSavingsSW'];
            resetValue(elementID);
            return;
        }

    } else {
        let elementID = ['percIncressGrossSW', 'flipContractLostSW', 'valueNewFlipBusinessSW', 'marketAndSaleSaveSW', 'numbFlipContractSW', 'totalSavedViaRouteSW', 'totalPotentialSavingsSW'];
        resetValue(elementID);
        return;
    }

    if (percIncressGrossSW && customerMoveOutSW) {
        flipContractLostSW = percIncressGrossSW / 100 * customerMoveOutSW;
        setElementValue('flipContractLostSW', flipContractLostSW.toFixed(2));
    } else {
        let elementID = ['flipContractLostSW', 'valueNewFlipBusinessSW', 'numbFlipContractSW', 'marketAndSaleSaveSW', 'totalSavedViaRouteSW', 'totalSavedViaRouteSW', 'totalPotentialSavingsSW'];
        resetValue(elementID);
        return;
    }

    if (flipContractLostSW) {
        let contractHaulerSW = getElementValue('contractHaulerSW');
        valueNewFlipBusinessSW = flipContractLostSW * contractHaulerSW;
        setElementValue('valueNewFlipBusinessSW', valueNewFlipBusinessSW.toFixed(2));
        calcAdditionalSavingsSW()
    } else {
        let elementID = ['valueNewFlipBusinessSW', 'totalPotentialSavingsSW'];
        resetValue(elementID);
        return;
    }

    if (customerMoveOutSW) {
        numbFlipContractSW = (improvedRecaptureSW / 100) * customerMoveOutSW;
        setElementValue('numbFlipContractSW', numbFlipContractSW);
    } else {
        let elementID = ['numbFlipContractSW', 'marketAndSaleSaveSW', 'totalSavedViaRouteSW', 'totalSavedViaRouteSW', 'totalPotentialSavingsSW'];
        resetValue(elementID);
        return;
    }

    if (numbFlipContractSW && haulerCostToRecaptureSW) {
        marketAndSaleSaveSW = numbFlipContractSW * haulerCostToRecaptureSW;
        setElementValue('marketAndSaleSaveSW', marketAndSaleSaveSW);
        calcAdditionalSavingsSW()
    } else {
        let elementID = ['marketAndSaleSaveSW', 'totalSavedViaRouteSW', 'totalPotentialSavingsSW'];
        resetValue(elementID);
        return;
    }

    if (marketAndSaleSaveSW && valueNewFlipBusinessSW) {
        totalSavedViaRouteSW = marketAndSaleSaveSW + valueNewFlipBusinessSW;
        setElementValue('totalSavedViaRouteSW', totalSavedViaRouteSW.toFixed(2));
    } else {
        let elementID = ['totalSavedViaRouteSW'];
        resetValue(elementID);
        return;
    }
}

function calcAdditionalSavingsCL() {

    saveFocusinRouteCL = getElementValue('saveFocusinRouteCL');
    densityIncreasesSaveCL = getElementValue('densityIncreasesSaveCL');
    saveReducedCL = getElementValue('saveReducedCL');
    customerGainCL = getElementValue('customerGainCL');
    contractHaulerCL = getElementValue('contractHaulerCL');
    marketAndSaleSaveCL = getElementValue('marketAndSaleSaveCL');
    totalBenefitCL = getElementValue('totalBenefitCL');
    valueNewFlipBusinessCL = getElementValue('valueNewFlipBusinessCL');
    totalSavedByCusCL = getElementValue('totalSavedByCusCL');
    valueOfEachCustCL = getElementValue('valueOfEachCustCL');

    let totalMobilCusValCL, totalAddSavingsCL, totalPotentialSavingsCL;

    if (customerGainCL) {

        if (valueOfEachCustCL) {
            totalMobilCusValCL = customerGainCL * valueOfEachCustCL;
            setElementValue('totalMobilCusValCL', totalMobilCusValCL);
        } else {
            let elementID = ['totalMobilCusValCL', 'totalAddSavingsCL'];
            resetValue(elementID);
            return;
        }

    } else {
        let elementID = ['totalPotentialSavingsCL', 'totalAddSavingsCL', 'totalMobilCusValCL'];
        resetValue(elementID);
        return;
    }

    if (totalMobilCusValCL && saveReducedCL && densityIncreasesSaveCL && saveFocusinRouteCL) {
        totalAddSavingsCL = parseInt(totalMobilCusValCL) + parseInt(saveReducedCL) + parseInt(densityIncreasesSaveCL) + parseInt(saveFocusinRouteCL);
        setElementValue('totalAddSavingsCL', totalAddSavingsCL);
    } else {
        let elementID = ['totalAddSavingsCL', 'totalPotentialSavingsCL'];
        resetValue(elementID);
        return;
    }

    if (marketAndSaleSaveCL && totalSavedByCusCL && totalBenefitCL && valueNewFlipBusinessCL && saveFocusinRouteCL && densityIncreasesSaveCL && saveReducedCL && totalMobilCusValCL) {
        totalPotentialSavingsCL = parseInt(marketAndSaleSaveCL) + parseInt(totalSavedByCusCL) + parseInt(totalBenefitCL) + parseInt(valueNewFlipBusinessCL) + parseInt(saveFocusinRouteCL) + parseInt(densityIncreasesSaveCL) + parseInt(saveReducedCL) + parseInt(totalMobilCusValCL);
        setElementValue('totalPotentialSavingsCL', totalPotentialSavingsCL);
    } else {
        let elementID = ['totalPotentialSavingsCL'];
        resetValue(elementID);
        return;
    }
}

function calcAdditionalSavingsSW() {

    saveFocusinRouteSW = getElementValue('saveFocusinRouteSW');
    densityIncreasesSaveSW = getElementValue('densityIncreasesSaveSW');
    saveReducedSW = getElementValue('saveReducedSW');
    customerGainSW = getElementValue('customerGainSW');
    contractHaulerSW = getElementValue('contractHaulerSW');
    marketAndSaleSaveSW = getElementValue('marketAndSaleSaveSW');
    totalBenefitSW = getElementValue('totalBenefitSW');
    valueNewFlipBusinessSW = getElementValue('valueNewFlipBusinessSW');
    totalSavedByCusSW = getElementValue('totalSavedByCusSW');
    valueOfEachCustSW = getElementValue('valueOfEachCustSW');

    let totalMobilCusValSW, totalAddSavingsSW, totalPotentialSavingsSW;

    if (customerGainSW) {

        if (valueOfEachCustSW) {
            totalMobilCusValSW = customerGainSW * valueOfEachCustSW;
            setElementValue('totalMobilCusValSW', totalMobilCusValSW);
        } else {
            let elementID = ['totalMobilCusValSW', 'totalAddSavingsSW'];
            resetValue(elementID);
            return;
        }

    } else {
        let elementID = ['totalPotentialSavingsSW', 'totalAddSavingsSW', 'totalMobilCusValSW'];
        resetValue(elementID);
        return;
    }

    if (totalMobilCusValSW && saveReducedSW && densityIncreasesSaveSW && saveFocusinRouteSW) {
        totalAddSavingsSW = parseInt(totalMobilCusValSW) + parseInt(saveReducedSW) + parseInt(densityIncreasesSaveSW) + parseInt(saveFocusinRouteSW);
        setElementValue('totalAddSavingsSW', totalAddSavingsSW);
    } else {
        let elementID = ['totalAddSavingsSW', 'totalPotentialSavingsSW'];
        resetValue(elementID);
        return;
    }

    if (marketAndSaleSaveSW && totalSavedByCusSW && totalBenefitSW && valueNewFlipBusinessSW && saveFocusinRouteSW && densityIncreasesSaveSW && saveReducedSW && totalMobilCusValSW) {
        totalPotentialSavingsSW = parseInt(marketAndSaleSaveSW) + parseInt(totalSavedByCusSW) + parseInt(totalBenefitSW) + parseInt(valueNewFlipBusinessSW) + parseInt(saveFocusinRouteSW) + parseInt(densityIncreasesSaveSW) + parseInt(saveReducedSW) + parseInt(totalMobilCusValSW);
        setElementValue('totalPotentialSavingsSW', totalPotentialSavingsSW);
    } else {
        let elementID = ['totalPotentialSavingsSW'];
        resetValue(elementID);
        return;
    }
}

function resetValue(elementID) {
    for (let i = 0; i < elementID.length; i++) {
        document.getElementById(elementID[i]).value = '';
    }
}



