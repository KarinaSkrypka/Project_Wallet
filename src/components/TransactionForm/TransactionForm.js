import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import Box from '@material-ui/core/Box';
import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';

//redux
import { useDispatch, useSelector } from 'react-redux';
import transactionOperations from '../../redux/transactions/transaction-operations';
import transactionsSelectors from '../../redux/transactions/transaction-selectors';
// import categorySelectors from '../../redux/categories/categories-selectors';
// import categoriesOperations from '../../redux/categories/categories-operations';

//components
import ButtonMain from '../ButtonMain';
import Switch from './Switch';
import SelectCategory from './SelectCategory';
import { Calendar } from '../IconBtn/Calendar';
import Spinner from '../Spinner';

// data
import {
  categories,
  addIncomes,
} from '../../assets/data/select-data/selectData';

//styles
import 'react-datepicker/dist/react-datepicker.css';
import styles from './TransactionForm.module.scss';

export default function TransactionForm({ onClose }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(transactionsSelectors.getLoading);
  const [chooseType, setChooseType] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [type, setType] = useState('-');

  // useEffect(() => {
  //   dispatch(categoriesOperations.getCategories());
  // }, [dispatch]);

  // const allCategories = useSelector(categorySelectors.getAllCategories);
  // console.log('CATEG', allCategories);

  const handleChangeType = () => {
    setChooseType(!chooseType);
    setType('+');
  };

  const handleChangeDate = e => {
    setIsOpenDate(!isOpenDate);
    setStartDate(e);
  };

  const handleClickDate = e => {
    e.preventDefault();
    setIsOpenDate(!isOpenDate);
  };

  const dateMoment = moment(new Date()).format('DD.MM.YYYY');

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleSubmitForm = (
    { type, money, category, date, month, year, comment },
    { resetForm },
  ) => {
    // let currentCategory = {};
    // if (type === '-') {
    //   currentCategory = categories.find(i => category === i.name);
    // } else {
    //   currentCategory = addIncomes.find(i => category === i.name);
    // }
    // console.log('FFFF', {
    //   type,
    //   category,
    //   money,
    //   date,
    //   comment,
    // });

    dispatch(
      transactionOperations.addTransactions({
        type,
        // category: currentCategory,
        category,
        money,
        date,
        month: date.slice(3, 5),
        year: date.slice(6),
        comment,
      }),
    );
    resetForm();
    onClose();
  };

  const validationsSchema = Yup.object().shape({
    type: Yup.string().required('type is required'),
    category: Yup.string('choose a category').required('category is required'),
    money: Yup.number('enter your sum')
      .min(0, 'sum must be positive')
      // .integer('sum must be an integer')
      .required('sum is required'),
    date: Yup.string(),
    comment: Yup.string('enter your comment').max(
      20,
      'no more than 20 characters',
    ),
  });

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <Formik
          initialValues={{
            type: !chooseType ? '-' : '+',
            // type: type,
            category: '',
            money: '',
            date: dateMoment,
            comment: '',
          }}
          onSubmit={handleSubmitForm}
          validationSchema={validationsSchema}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <h3 className={styles.title}>Add transaction</h3>

              <Switch
                isChecked={chooseType}
                onSwitch={handleChangeType}
                value="type"
              />

              {chooseType ? (
                <Box className={styles.categoryBox}>
                  <SelectCategory label="category" name="category">
                    <option className={styles.optionSelect} value="">
                      Choose category
                    </option>

                    {addIncomes.map(category => (
                      <option
                        className={styles.optionChoose}
                        key={category._id}
                        value={category.name}
                      >
                        {category.name}
                      </option>
                    ))}
                  </SelectCategory>
                </Box>
              ) : (
                <Box className={styles.categoryBox}>
                  <SelectCategory label="category" name="category">
                    <option className={styles.optionSelect} value="">
                      Choose category
                    </option>

                    {categories.map(category => (
                      <option
                        className={styles.optionChoose}
                        key={category._id}
                        value={category.name}
                      >
                        {category.name}
                      </option>
                    ))}
                  </SelectCategory>
                </Box>
              )}

              {/* {chooseType ? (
                <Box className={styles.categoryBox}>
                  <SelectCategory label="category" name="category">
                    <option className={styles.optionSelect} value="">
                      Choose category
                    </option>

                    {allCategories.map((category, i) => (
                      <option
                        className={styles.optionChoose}
                        key={i}
                        value={category}
                      >
                        {category}
                      </option>
                    ))}
                  </SelectCategory>
                </Box>
              ) : (
                <Box className={styles.categoryBox}>
                  <SelectCategory label="category" name="category">
                    <option className={styles.optionSelect} value="">
                      Choose category
                    </option>

                    {allCategories.map((category, i) => (
                      <option
                        className={styles.optionChoose}
                        key={i}
                        value={category}
                      >
                        {category}
                      </option>
                    ))}
                  </SelectCategory>
                </Box>
              )} */}

              <div className={styles.Credentials}>
                <div className={styles.BoxContainer}>
                  <Field
                    name="money"
                    type="number"
                    placeholder="Enter your sum"
                    // min="0"
                    // step="1"
                    className={styles.Amount}
                  />
                  {errors.money && touched.money && (
                    <div className={styles.inputFeedback}>{errors.money}</div>
                  )}
                </div>

                <Box className={styles.DateBox}>
                  <DatePicker
                    maxDate={addMonths(new Date(), 0)}
                    showDisabledMonthNavigation
                    name="date"
                    open={false}
                    className={styles.Date}
                    selected={startDate}
                    onChange={handleChangeDate}
                    dateFormat="dd.MM.yyyy"
                  />

                  <button
                    className={styles.BtnIconCalendar}
                    onClick={handleClickDate}
                  >
                    <Calendar svg={styles.svgCalendar} />
                  </button>

                  {isOpenDate && (
                    <div className={styles.datePicker}>
                      <DatePicker
                        maxDate={addMonths(new Date(), 0)}
                        showDisabledMonthNavigation
                        closeOnScroll={true}
                        selected={startDate}
                        onChange={handleChangeDate}
                        inline
                      />
                    </div>
                  )}
                </Box>
              </div>

              <Box className={styles.box_select}>
                <div className={styles.BoxContainer}>
                  <Field
                    name="comment"
                    as="textarea"
                    type="text"
                    placeholder="Comment"
                    className={styles.Comment}
                  />
                  {errors.comment && touched.comment && (
                    <div className={styles.inputFeedbackComment}>
                      {errors.comment}
                    </div>
                  )}
                </div>
              </Box>

              <ButtonMain type="submit" contentBtn="Add" button="Button" />

              <ButtonMain
                handleClick={handleClick}
                contentBtn="Cancel"
                button="ButtonSecondary"
              />

              {isLoading && <Spinner />}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
