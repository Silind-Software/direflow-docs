import React, { FC, useState, useRef, useEffect } from 'react';
import useScrollDisplay from 'use-scroll-display';
import { Column, Container, ExampleContainer, PickerExamples } from './Styles';

const UseExample: FC = () => {
  const [cartList, setCartList] = useState<any[]>([
    {
      label: 'Bitcoin',
      symbol: 'BTC',
      iconUrl: 'https://cryptoicons.org/api/icon/btc/50',
      price: 9568.57681070889,
    },
    {
      label: 'Ethereum',
      symbol: 'ETH',
      iconUrl: 'https://cryptoicons.org/api/icon/eth/50',
      price: 255.7944136532623,
    },
    {
      label: 'Ethereum',
      symbol: 'ETH',
      iconUrl: 'https://cryptoicons.org/api/icon/eth/50',
      price: 255.7944136532623,
    },
    {
      label: 'Ethereum',
      symbol: 'ETH',
      iconUrl: 'https://cryptoicons.org/api/icon/eth/50',
      price: 255.7944136532623,
    },
    {
      label: 'XRP',
      symbol: 'XRP',
      iconUrl: 'https://cryptoicons.org/api/icon/xrp/50',
      price: 0.2697469906325168,
    },
  ]);

  const cartRef = useRef(null);
  const itemsRef = useRef(null);

  const radioButtonsRef = useRef(null);
  const checkboxRef = useRef(null);

  const [widgetsExampleRef] = useScrollDisplay();
  const [uiLibraryExampleRef] = useScrollDisplay();

  useEffect(() => {
    if (!radioButtonsRef.current) {
      return;
    }

    radioButtonsRef.current.options = [
      {
        label: 'Option A',
        value: 'option-a',
      },
      {
        label: 'Option B',
        value: 'option-b',
        selected: true,
      },
      {
        label: 'Option C',
        value: 'option-c',
      },
    ];
  }, [radioButtonsRef.current]);

  useEffect(() => {
    if (!checkboxRef.current) {
      return;
    }

    checkboxRef.current.options = [
      {
        label: 'Option A',
        value: 'option-a',
        selected: true,
      },
      {
        label: 'Option B',
        value: 'option-b',
      },
    ];
  }, [checkboxRef.current]);

  useEffect(() => {
    if (!cartRef.current) {
      return;
    }

    const removeItem = (event: CustomEvent) => {
      setCartList((currentList: any[]) => {
        const item = event.detail;
        const itemIndex = currentList.findIndex(
          (currentItem) => currentItem.symbol === item.symbol,
        );
        return currentList.filter((_, index) => index !== itemIndex);
      });
    };

    cartRef.current.addEventListener('remove-item', removeItem);

    return () => {
      cartRef.current.removeEventListener('remove-item', removeItem);
    };
  }, [cartRef.current]);

  useEffect(() => {
    if (!itemsRef.current) {
      return;
    }

    const addItem = (event: CustomEvent) => {
      const item = event.detail;
      setCartList((currentList: any[]) => [...currentList, item]);
    };

    itemsRef.current.addEventListener('add-item', addItem);

    return () => {
      itemsRef.current.removeEventListener('add-item', addItem);
    };
  }, [itemsRef.current]);

  useEffect(() => {
    if (!cartRef.current) {
      return;
    }

    cartRef.current.itemsList = cartList;
  }, [cartList]);

  return (
    <Container>
      <Column ref={widgetsExampleRef}>
        <ExampleContainer>
          <crypto-cart fullWidth='true' ref={cartRef} />
          <crypto-items fullWidth='true' ref={itemsRef} componentTitle='Items' />
        </ExampleContainer>
      </Column>
      <Column ref={uiLibraryExampleRef}>
        <ExampleContainer>
          <custom-button size='small' type='default' theme='widget' />
          <custom-button size='medium' type='primary' icon='github' showLoader='true' />
          <custom-button
            text='Log in with Google'
            size='large'
            type='social'
            icon='google'
            block='true'
          />
          <custom-slider />
          <PickerExamples>
            <custom-radio ref={radioButtonsRef} text='Choose something' />
            <custom-checkbox ref={checkboxRef} text='Choose something' type='success' />
          </PickerExamples>
        </ExampleContainer>
      </Column>
    </Container>
  );
};

export default UseExample;
