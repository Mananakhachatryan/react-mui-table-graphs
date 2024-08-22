import styled from 'styled-components';
import ResizeIcon from '@mui/icons-material/DragHandle';

export const TableContainer = styled.div`
  overflow-x: auto;
  margin: 0;
  padding: 0;
`;

export const HeaderCellContainer = styled.th`
  background-color: #f4f4f4;
  padding: 8px;
  border-bottom: 2px solid #ddd;
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
`;

export const ResizeHandle = styled(ResizeIcon)`
  width: 10px;
  height: 100%;
  background-color: #ddd;
  position: absolute;
  right: 0;
  top: 0;
  cursor: col-resize;
  z-index: 10;
`;

export const resizeHandleStyle = {
  width: '10px',
  height: '100%',
  backgroundColor: '#ddd',
  position: 'absolute',
  right: '0',
  top: '0',
  cursor: 'col-resize',
  zIndex: 10,
};
