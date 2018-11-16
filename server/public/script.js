function inputValue() {

    //-------FASTER RESPONSE CALCULATOR Current Lead

    let generateCL = document.getElementById('generateCL').value
    let closeContractCL = document.getElementById('closeContractCL').value
    let lostContractCL = document.getElementById('lostContractCL').value
    let contractHaulerCL = document.getElementById('contractHaulerCL').value
    let newContractCL = generateCL * (closeContractCL / 100)
    let numLostContractCL = generateCL - newContractCL
    let numFastContractCL = lostContractCL * (numLostContractCL / 100)
    let totalBenefitCL = numFastContractCL * contractHaulerCL
    document.getElementById('newContractCL').value = newContractCL;
    document.getElementById('numLostContractCL').value = numLostContractCL;
    document.getElementById('numFastContractCL').value = numFastContractCL;
    document.getElementById('totalBenefitCL').value = totalBenefitCL.toFixed(2);

    //-------FASTER RESPONSE CALCULATOR SEO/Website

    let generateSW = document.getElementById('generateSW').value
    let closeContractSW = document.getElementById('closeContractSW').value
    let lostContractSW = document.getElementById('lostContractSW').value
    let contractHaulerSW = document.getElementById('contractHaulerSW').value
    let newContractSW = generateSW * (closeContractSW / 100)
    let numLostContractSW = generateSW - newContractSW
    let numFastContractSW = lostContractSW * (numLostContractSW / 100)
    let totalBenefitSW = numFastContractSW * contractHaulerSW
    document.getElementById('newContractSW').value = newContractSW;
    document.getElementById('numLostContractSW').value = numLostContractSW;
    document.getElementById('numFastContractSW').value = numFastContractSW;
    document.getElementById('totalBenefitSW').value = totalBenefitSW.toFixed(2);


    //-------SHIFTING CUSTOMERS TO SELF SERVICE Current Lead
    let customerSelfServCL = document.getElementById('customerSelfServCL').value
    let payTeamCL = document.getElementById('payTeamCL').value
    let contractShiftCL = (customerSelfServCL / 100) * newContractCL
    let totalSavedByCusCL = contractShiftCL * payTeamCL
    document.getElementById('contractShiftCL').value = contractShiftCL;
    document.getElementById('totalSavedByCusCL').value = totalSavedByCusCL.toFixed(2);

    //-------SHIFTING CUSTOMERS TO SELF SERVICE SEO/Website
    let customerSelfServSW = document.getElementById('customerSelfServSW').value
    let payTeamSW = document.getElementById('payTeamSW').value
    let contractShiftSW = (customerSelfServSW / 100) * newContractSW
    let totalSavedByCusSW = contractShiftSW * payTeamSW
    document.getElementById('contractShiftSW').value = contractShiftSW;
    document.getElementById('totalSavedByCusSW').value = totalSavedByCusSW.toFixed(2);

    //-------MOVE OUT RE-CAPTURE CALCULATOR Current Lead

    let customerMoveOutCL = document.getElementById('customerMoveOutCL').value
    let haulerCurrMoveOutCL = document.getElementById('haulerCurrMoveOutCL').value
    let improvedRecaptureCL = document.getElementById('improvedRecaptureCL').value
    let haulerCostToRecaptureCL = document.getElementById('haulerCostToRecaptureCL').value
    let percIncressGrossCL = improvedRecaptureCL - haulerCurrMoveOutCL
    let flipContractLostCL = (percIncressGrossCL / 100) * customerMoveOutCL
    let valueNewFlipBusinessCL = flipContractLostCL * contractHaulerCL
    let numbFlipContractCL = (improvedRecaptureCL / 100) * customerMoveOutCL
    let marketAndSaleSaveCL = numbFlipContractCL * haulerCostToRecaptureCL
    let totalSavedViaRouteCL = marketAndSaleSaveCL + valueNewFlipBusinessCL
    document.getElementById('percIncressGrossCL').value = percIncressGrossCL;
    document.getElementById('flipContractLostCL').value = flipContractLostCL.toFixed(2);
    document.getElementById('numbFlipContractCL').value = numbFlipContractCL;
    document.getElementById('valueNewFlipBusinessCL').value = valueNewFlipBusinessCL.toFixed(2);
    document.getElementById('marketAndSaleSaveCL').value = marketAndSaleSaveCL.toFixed(2);
    document.getElementById('totalSavedViaRouteCL').value = totalSavedViaRouteCL.toFixed(2);

    //-------MOVE OUT RE-CAPTURE CALCULATOR SEO/Website

    let customerMoveOutSW = document.getElementById('customerMoveOutSW').value
    let haulerCurrMoveOutSW = document.getElementById('haulerCurrMoveOutSW').value
    let improvedRecaptureSW = document.getElementById('improvedRecaptureSW').value
    let haulerCostToRecaptureSW = document.getElementById('haulerCostToRecaptureSW').value
    let percIncressGrossSW = improvedRecaptureSW - haulerCurrMoveOutSW
    let flipContractLostSW = (percIncressGrossSW / 100) * customerMoveOutSW
    let valueNewFlipBusinessSW = flipContractLostSW * contractHaulerSW
    let numbFlipContractSW = (improvedRecaptureSW / 100) * customerMoveOutSW
    let marketAndSaleSaveSW = numbFlipContractSW * haulerCostToRecaptureSW
    let totalSavedViaRouteSW = marketAndSaleSaveSW + valueNewFlipBusinessSW
    document.getElementById('percIncressGrossSW').value = percIncressGrossSW;
    document.getElementById('flipContractLostSW').value = flipContractLostSW.toFixed(2);
    document.getElementById('numbFlipContractSW').value = numbFlipContractSW;
    document.getElementById('valueNewFlipBusinessSW').value = valueNewFlipBusinessSW.toFixed(2);
    document.getElementById('marketAndSaleSaveSW').value = marketAndSaleSaveSW.toFixed(2);
    document.getElementById('totalSavedViaRouteSW').value = totalSavedViaRouteSW.toFixed(2);


    //-------ADDITIONAL SAVINGS Current Lead

    let saveFocusinRouteCL = document.getElementById('saveFocusinRouteCL').value
    let densityIncreasesSaveCL = document.getElementById('densityIncreasesSaveCL').value
    let saveReducedCL = document.getElementById('saveReducedCL').value
    let customerGainCL = document.getElementById('customerGainCL').value
    let valueOfEachCustCL = contractHaulerCL
    let totalMobilCusValCL = customerGainCL * valueOfEachCustCL
    let totalAddSavingsCL = parseInt(totalMobilCusValCL) + parseInt(saveReducedCL) + parseInt(densityIncreasesSaveCL) + parseInt(saveFocusinRouteCL)
    let totalPotentialSavingsCL = parseInt(marketAndSaleSaveCL) + parseInt(totalSavedByCusCL) + parseInt(totalBenefitCL) + parseInt(valueNewFlipBusinessCL) + parseInt(saveFocusinRouteCL) + parseInt(densityIncreasesSaveCL) + parseInt(saveReducedCL) + parseInt(totalMobilCusValCL)
    document.getElementById('valueOfEachCustCL').value = valueOfEachCustCL;
    document.getElementById('totalMobilCusValCL').value = totalMobilCusValCL;
    document.getElementById('totalAddSavingsCL').value = totalAddSavingsCL;
    document.getElementById('totalPotentialSavingsCL').value = totalPotentialSavingsCL;

    //-------ADDITIONAL SAVINGS SEO/Website

    let saveFocusinRouteSW = document.getElementById('saveFocusinRouteSW').value
    let densityIncreasesSaveSW = document.getElementById('densityIncreasesSaveSW').value
    let saveReducedSW = document.getElementById('saveReducedSW').value
    let customerGainSW = document.getElementById('customerGainSW').value
    let valueOfEachCustSW = contractHaulerSW
    let totalMobilCusValSW = customerGainSW * valueOfEachCustSW
    let totalAddSavingsSW = parseInt(totalMobilCusValSW) + parseInt(saveReducedSW) + parseInt(densityIncreasesSaveSW) + parseInt(saveFocusinRouteSW)
    let totalPotentialSavingsSW = parseInt(marketAndSaleSaveSW) + parseInt(totalSavedByCusSW) + parseInt(totalBenefitSW) + parseInt(valueNewFlipBusinessSW) + parseInt(saveFocusinRouteSW) + parseInt(densityIncreasesSaveSW) + parseInt(saveReducedSW) + parseInt(totalMobilCusValSW)
    document.getElementById('valueOfEachCustSW').value = valueOfEachCustSW;
    document.getElementById('totalMobilCusValSW').value = totalMobilCusValSW;
    document.getElementById('totalAddSavingsSW').value = totalAddSavingsSW;
    document.getElementById('totalPotentialSavingsSW').value = totalPotentialSavingsSW;

}