import React, { FC } from 'react';

interface IProps {
  title: string;
}

const PageHeader: FC<IProps> = (props) => {
  const { title } = props;

  return (
    <div>
      {title}
    </div>
  );
};

PageHeader.defaultProps = {};

export default PageHeader;
