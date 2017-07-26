$(document).ready(function () {
  'use strict';
  $(".insure-catalog__block-hidden").addClass("content-hidden");
  $(".insure-selection__select-additional").addClass("content-hidden");
  $(".insure-selection__person").addClass("content-hidden");


  //FILTER-mobile
  $(".insure-catalog__filter-selection").click(function(){
    $(".insure-catalog__filter-name-wrapper").toggleClass("insure-catalog__filter-name-wrapper--mobile");
  });

  //CARDS
  // full info of card on list-view
  $(".insure-catalog__button-additional").click(function(){
    $(this).parent().next(".insure-catalog__block-hidden").toggleClass("content-show insure-catalog__block-hidden--toggle");
    $(this).parent().parent().toggleClass("insure-catalog__item--toggle");
  });
  //change card-views to blocks
  $(".insure-catalog__filter-view--block").click(function(){
    $(this).addClass("insure-catalog__filter-view--active");
    $(".insure-catalog__item").removeClass("insure-catalog__item--toggle");
    $(".insure-catalog__block-hidden").removeClass("content-show");
    $(".insure-catalog__filter-view--list").removeClass("insure-catalog__filter-view--active");
    $(".insure-catalog__list").addClass("insure-catalog__list--small");
    $(".insure-catalog__block-shown").addClass("insure-catalog__block-shown--small");
  });
  //change card-views to list
  $(".insure-catalog__filter-view--list").click(function(){
    $(this).addClass("insure-catalog__filter-view--active");
    $(".insure-catalog__filter-view--block").removeClass("insure-catalog__filter-view--active");
    $(".insure-catalog__list").removeClass("insure-catalog__list--small");
    $(".insure-catalog__block-shown").removeClass("insure-catalog__block-shown--small");
  });

  //FORM
  // show additional blocks in form
  $(".insure-selection__button-additional").click(function(){
    $(this).toggleClass("insure-selection__button-additional--opened");
    $(".insure-selection__select-additional").toggleClass("content-show");
  });
  // show additional block to select person
  //catalog-form
  $(".insure-selection__select-block--person").click(function(){
    $(".insure-selection__person").toggleClass("content-show");
  });
  //main-form
  $(".main-selection__select-block--person").click(function(){
    $(".main-selection__person").toggleClass("content-show");
  });

  // multiselect
  $('.main-selection__select').tokenize2({
    placeholder: "Куда вы собираетесь?",
    tokensAllowCustom: true
  });

});
