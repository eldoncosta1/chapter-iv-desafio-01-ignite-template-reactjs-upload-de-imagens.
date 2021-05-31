import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent maxWidth="max-content" bgColor="pGray.900">
        <ModalBody p={0} width="auto">
          <Image src={imgUrl} maxWidth={900} maxHeight={600} />
        </ModalBody>
        <ModalFooter
          justifyContent="start"
          borderBottomLeftRadius={6}
          borderBottomRightRadius={6}
        >
          <Link target="_blank" href={imgUrl} color="pGray.50">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
