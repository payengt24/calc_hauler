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
        return resetValue(['newContractCL', 'numLostContractCL', 'numFastContractCL', 'totalBenefitCL', 'contractShiftCL', 'totalSavedByCusCL', 'totalPotentialSavingsCL']);
    }

    if (lostContractCL) {
        numFastContractCL = lostContractCL * numLostContractCL / 100;
        setElementValue('numFastContractCL', numFastContractCL);
    } else {
        return resetValue(['numFastContractCL', 'totalBenefitCL', 'totalPotentialSavingsCL']); 
    }

    if (contractHaulerCL) {
        let totalBenefitCL = numFastContractCL * contractHaulerCL;
        setElementValue('totalBenefitCL', totalBenefitCL);
        valueOfEachCustCL = getElementValue('contractHaulerCL');
        setElementValue('valueOfEachCustCL', valueOfEachCustCL);
        calcMoveOurRecaptureCL();
        calcAdditionalSavingsCL();
    } else {
        return resetValue(['totalBenefitCL', 'valueNewFlipBusinessCL', 'valueOfEachCustCL', 'totalMobilCusValCL', 'totalAddSavingsCL', 'totalPotentialSavingsCL']);
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
        return resetValue(['newContractSW', 'numLostContractSW', 'numFastContractSW', 'totalBenefitSW', 'contractShiftSW', 'totalSavedByCusSW', 'totalPotentialSavingsSW']); 
    }

    if (lostContractSW) {
        numFastContractSW = lostContractSW * numLostContractSW / 100;
        setElementValue('numFastContractSW', numFastContractSW);
    } else {
        return resetValue(['numFastContractSW', 'totalBenefitSW', 'totalPotentialSavingsSW']);   
    }

    if (contractHaulerSW) {
        let totalBenefitSW = numFastContractSW * contractHaulerSW;
        setElementValue('totalBenefitSW', totalBenefitSW);
        valueOfEachCustSW = getElementValue('contractHaulerSW');
        setElementValue('valueOfEachCustSW', valueOfEachCustSW);
        calcMoveOurRecaptureSW();
        calcAdditionalSavingsSW();
    } else {
        return resetValue(['totalBenefitSW', 'valueNewFlipBusinessSW', 'valueOfEachCustSW', 'totalMobilCusValSW', 'totalAddSavingsSW', 'totalPotentialSavingsSW']); 
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
        return resetValue(['contractShiftCL', 'totalSavedByCusCL', 'totalPotentialSavingsCL']);
    }

    if (payTeamCL) {
        totalSavedByCusCL = contractShiftCL * payTeamCL;
        setElementValue('totalSavedByCusCL', totalSavedByCusCL.toFixed(2));
        calcAdditionalSavingsCL()
    } else {
        return resetValue(['totalSavedByCusCL', 'totalPotentialSavingsCL']);
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
        return resetValue(['contractShiftSW', 'totalSavedByCusSW', 'totalPotentialSavingsSW']);
    }

    if (payTeamSW) {
        totalSavedByCusSW = contractShiftSW * payTeamSW;
        setElementValue('totalSavedByCusSW', totalSavedByCusSW.toFixed(2));
        calcAdditionalSavingsSW()
    } else {
        return resetValue(['totalSavedByCusSW', 'totalPotentialSavingsSW']);
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
            return resetValue(['percIncressGrossCL', 'flipContractLostCL', 'valueNewFlipBusinessCL', 'totalPotentialSavingsCL']);
            
        }

    } else {
        return resetValue(['percIncressGrossCL', 'flipContractLostCL', 'valueNewFlipBusinessCL', 'marketAndSaleSaveCL', 'numbFlipContractCL', 'totalSavedViaRouteCL', 'totalPotentialSavingsCL']);
        
    }

    if (percIncressGrossCL && customerMoveOutCL) {
        flipContractLostCL = percIncressGrossCL / 100 * customerMoveOutCL;
        setElementValue('flipContractLostCL', flipContractLostCL.toFixed(2));
    } else {
        return resetValue(['flipContractLostCL', 'valueNewFlipBusinessCL', 'numbFlipContractCL', 'marketAndSaleSaveCL', 'totalSavedViaRouteCL', 'totalSavedViaRouteCL', 'totalPotentialSavingsCL']);
        
    }

    if (flipContractLostCL) {
        let contractHaulerCL = getElementValue('contractHaulerCL');
        valueNewFlipBusinessCL = flipContractLostCL * contractHaulerCL;
        setElementValue('valueNewFlipBusinessCL', valueNewFlipBusinessCL.toFixed(2));
        calcAdditionalSavingsCL()
    } else {
        return resetValue(['valueNewFlipBusinessCL', 'totalPotentialSavingsCL']);
    }

    if (customerMoveOutCL) {
        numbFlipContractCL = (improvedRecaptureCL / 100) * customerMoveOutCL;
        setElementValue('numbFlipContractCL', numbFlipContractCL);
    } else {
        return resetValue(['numbFlipContractCL', 'marketAndSaleSaveCL', 'totalSavedViaRouteCL', 'totalSavedViaRouteCL', 'totalPotentialSavingsCL']);

    }

    if (numbFlipContractCL && haulerCostToRecaptureCL) {
        marketAndSaleSaveCL = numbFlipContractCL * haulerCostToRecaptureCL;
        setElementValue('marketAndSaleSaveCL', marketAndSaleSaveCL);
        calcAdditionalSavingsCL()
    } else {
        return resetValue(['marketAndSaleSaveCL', 'totalSavedViaRouteCL', 'totalPotentialSavingsCL']);
        
    }

    if (marketAndSaleSaveCL && valueNewFlipBusinessCL) {
        totalSavedViaRouteCL = marketAndSaleSaveCL + valueNewFlipBusinessCL;
        setElementValue('totalSavedViaRouteCL', totalSavedViaRouteCL.toFixed(2));
    } else {
        return resetValue('totalSavedViaRouteCL');   
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
            return resetValue(['percIncressGrossSW', 'flipContractLostSW', 'valueNewFlipBusinessSW', 'totalPotentialSavingsSW']);
            
        }

    } else {
        return resetValue(['percIncressGrossSW', 'flipContractLostSW', 'valueNewFlipBusinessSW', 'marketAndSaleSaveSW', 'numbFlipContractSW', 'totalSavedViaRouteSW', 'totalPotentialSavingsSW']);
        
    }

    if (percIncressGrossSW && customerMoveOutSW) {
        flipContractLostSW = percIncressGrossSW / 100 * customerMoveOutSW;
        setElementValue('flipContractLostSW', flipContractLostSW.toFixed(2));
    } else {
        return resetValue(['flipContractLostSW', 'valueNewFlipBusinessSW', 'numbFlipContractSW', 'marketAndSaleSaveSW', 'totalSavedViaRouteSW', 'totalSavedViaRouteSW', 'totalPotentialSavingsSW']);
        
    }

    if (flipContractLostSW) {
        let contractHaulerSW = getElementValue('contractHaulerSW');
        valueNewFlipBusinessSW = flipContractLostSW * contractHaulerSW;
        setElementValue('valueNewFlipBusinessSW', valueNewFlipBusinessSW.toFixed(2));
        calcAdditionalSavingsSW()
    } else {
        return resetValue(['valueNewFlipBusinessSW', 'totalPotentialSavingsSW']);
    }

    if (customerMoveOutSW) {
        numbFlipContractSW = (improvedRecaptureSW / 100) * customerMoveOutSW;
        setElementValue('numbFlipContractSW', numbFlipContractSW);
    } else {
        return resetValue(['numbFlipContractSW', 'marketAndSaleSaveSW', 'totalSavedViaRouteSW', 'totalSavedViaRouteSW', 'totalPotentialSavingsSW']);

    }

    if (numbFlipContractSW && haulerCostToRecaptureSW) {
        marketAndSaleSaveSW = numbFlipContractSW * haulerCostToRecaptureSW;
        setElementValue('marketAndSaleSaveSW', marketAndSaleSaveSW);
        calcAdditionalSavingsSW()
    } else {
        return resetValue(['marketAndSaleSaveSW', 'totalSavedViaRouteSW', 'totalPotentialSavingsSW']);
        
    }

    if (marketAndSaleSaveSW && valueNewFlipBusinessSW) {
        totalSavedViaRouteSW = marketAndSaleSaveSW + valueNewFlipBusinessSW;
        setElementValue('totalSavedViaRouteSW', totalSavedViaRouteSW.toFixed(2));
    } else {
        return resetValue('totalSavedViaRouteSW');   
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
            return resetValue(['totalMobilCusValCL', 'totalAddSavingsCL']);
            
        }

    } else {
        return resetValue(['totalPotentialSavingsCL', 'totalAddSavingsCL', 'totalMobilCusValCL']);
    }

    if (totalMobilCusValCL && saveReducedCL && densityIncreasesSaveCL && saveFocusinRouteCL) {
        totalAddSavingsCL = parseInt(totalMobilCusValCL) + parseInt(saveReducedCL) + parseInt(densityIncreasesSaveCL) + parseInt(saveFocusinRouteCL);
        setElementValue('totalAddSavingsCL', totalAddSavingsCL);
    } else {
        return resetValue(['totalAddSavingsCL', 'totalPotentialSavingsCL']);
    }

    if (marketAndSaleSaveCL && totalSavedByCusCL && totalBenefitCL && valueNewFlipBusinessCL && saveFocusinRouteCL && densityIncreasesSaveCL && saveReducedCL && totalMobilCusValCL) {
        totalPotentialSavingsCL = parseInt(marketAndSaleSaveCL) + parseInt(totalSavedByCusCL) + parseInt(totalBenefitCL) + parseInt(valueNewFlipBusinessCL) + parseInt(saveFocusinRouteCL) + parseInt(densityIncreasesSaveCL) + parseInt(saveReducedCL) + parseInt(totalMobilCusValCL);
        setElementValue('totalPotentialSavingsCL', totalPotentialSavingsCL);
    } else {
        return resetValue(['totalPotentialSavingsCL']);
        
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
            return resetValue(['totalMobilCusValSW', 'totalAddSavingsSW']);
            
        }

    } else {
        return resetValue(['totalPotentialSavingsSW', 'totalAddSavingsSW', 'totalMobilCusValSW']);
    }

    if (totalMobilCusValSW && saveReducedSW && densityIncreasesSaveSW && saveFocusinRouteSW) {
        totalAddSavingsSW = parseInt(totalMobilCusValSW) + parseInt(saveReducedSW) + parseInt(densityIncreasesSaveSW) + parseInt(saveFocusinRouteSW);
        setElementValue('totalAddSavingsSW', totalAddSavingsSW);
    } else {
        return resetValue(['totalAddSavingsSW', 'totalPotentialSavingsSW']);
    }

    if (marketAndSaleSaveSW && totalSavedByCusSW && totalBenefitSW && valueNewFlipBusinessSW && saveFocusinRouteSW && densityIncreasesSaveSW && saveReducedSW && totalMobilCusValSW) {
        totalPotentialSavingsSW = parseInt(marketAndSaleSaveSW) + parseInt(totalSavedByCusSW) + parseInt(totalBenefitSW) + parseInt(valueNewFlipBusinessSW) + parseInt(saveFocusinRouteSW) + parseInt(densityIncreasesSaveSW) + parseInt(saveReducedSW) + parseInt(totalMobilCusValSW);
        setElementValue('totalPotentialSavingsSW', totalPotentialSavingsSW);
    } else {
        return resetValue(['totalPotentialSavingsSW']);
        
    }
}

function resetValue(elementID) {
    elementID.forEach(function (id){
        document.getElementById(id).value = ''
    })
}



