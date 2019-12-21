import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="data:image/webp;base64,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"
                alt="Tenis"
              />
            </td>
            <td>
              <strong>Tenis muito massa!</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={2} />
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,20</strong>
        </Total>
      </footer>
    </Container>
  );
}
