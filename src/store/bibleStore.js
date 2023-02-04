import { defineStore } from "pinia";

// Old Testament
import genesis from "../data/bible/Genesis.json";
import exodus from "../data/bible/Exodus.json";
import leviticus from "../data/bible/Leviticus.json";
import numbers from "../data/bible/Numbers.json";
import deuteronomy from "../data/bible/Deuteronomy.json";
import joshua from "../data/bible/Joshua.json";
import judges from "../data/bible/Judges.json";
import ruth from "../data/bible/Ruth.json";
import _1_samuel from "../data/bible/1Samuel.json";
import _2_samuel from "../data/bible/2Samuel.json";
import _1_kings from "../data/bible/1Kings.json";
import _2_kings from "../data/bible/2Kings.json";
import _1_chronicles from "../data/bible/1Chronicles.json";
import _2_chronicles from "../data/bible/2Chronicles.json";
import ezra from "../data/bible/Ezra.json";
import nehemiah from "../data/bible/Nehemiah.json";
import esther from "../data/bible/Esther.json";
import job from "../data/bible/Job.json";
import psalms from "../data/bible/Psalms.json";
import proverbs from "../data/bible/Proverbs.json";
import ecclesiastes from "../data/bible/Ecclesiastes.json";
import song_of_solomon from "../data/bible/SongofSolomon.json";
import isaiah from "../data/bible/Isaiah.json";
import jeremiah from "../data/bible/Jeremiah.json";
import lamentations from "../data/bible/Lamentations.json";
import ezekiel from "../data/bible/Ezekiel.json";
import daniel from "../data/bible/Daniel.json";
import hosea from "../data/bible/Hosea.json";
import joel from "../data/bible/Joel.json";
import amos from "../data/bible/Amos.json";
import obadiah from "../data/bible/Obadiah.json";
import jonah from "../data/bible/Jonah.json";
import micah from "../data/bible/Micah.json";
import nahum from "../data/bible/Nahum.json";
import habakkuk from "../data/bible/Habakkuk.json";
import zephaniah from "../data/bible/Zephaniah.json";
import haggai from "../data/bible/Haggai.json";
import zechariah from "../data/bible/Zechariah.json";
import malachi from "../data/bible/Malachi.json";

// New Testament
import matthew from "../data/bible/Matthew.json";
import mark from "../data/bible/Mark.json";
import luke from "../data/bible/Luke.json";
import john from "../data/bible/John.json";
import acts from "../data/bible/Acts.json";
import romans from "../data/bible/Romans.json";
import _1_corinthians from "../data/bible/1Corinthians.json";
import _2_corinthians from "../data/bible/2Corinthians.json";
import galatians from "../data/bible/Galatians.json";
import ephesians from "../data/bible/Ephesians.json";
import philippians from "../data/bible/Philippians.json";
import colossians from "../data/bible/Colossians.json";
import _1_thessalonians from "../data/bible/1Thessalonians.json";
import _2_thessalonians from "../data/bible/2Thessalonians.json";
import _1_timothy from "../data/bible/1Timothy.json";
import _2_timothy from "../data/bible/2Timothy.json";
import titus from "../data/bible/Titus.json";
import philemon from "../data/bible/Philemon.json";
import hebrews from "../data/bible/Hebrews.json";
import james from "../data/bible/James.json";
import _1_peter from "../data/bible/1Peter.json";
import _2_peter from "../data/bible/2Peter.json";
import _1_john from "../data/bible/1John.json";
import _2_john from "../data/bible/2John.json";
import _3_john from "../data/bible/3John.json";
import jude from "../data/bible/Jude.json";
import revelation from "../data/bible/Revelation.json";

export const useBibleStore = defineStore("bibleStore", {
  state: () => {
    return {
      bible: [
        genesis,
        exodus,
        leviticus,
        numbers,
        deuteronomy,
        joshua,
        judges,
        ruth,
        _1_samuel,
        _2_samuel,
        _1_kings,
        _2_kings,
        _1_chronicles,
        _2_chronicles,
        ezra,
        nehemiah,
        esther,
        job,
        psalms,
        proverbs,
        ecclesiastes,
        song_of_solomon,
        isaiah,
        jeremiah,
        lamentations,
        ezekiel,
        daniel,
        hosea,
        joel,
        amos,
        obadiah,
        jonah,
        micah,
        nahum,
        habakkuk,
        zephaniah,
        haggai,
        zechariah,
        malachi,
        matthew,
        mark,
        luke,
        john,
        acts,
        romans,
        _1_corinthians,
        _2_corinthians,
        galatians,
        ephesians,
        philippians,
        colossians,
        _1_thessalonians,
        _2_thessalonians,
        _1_timothy,
        _2_timothy,
        titus,
        philemon,
        hebrews,
        james,
        _1_peter,
        _2_peter,
        _1_john,
        _2_john,
        _3_john,
        jude,
        revelation,
      ],
    };
  },
});
